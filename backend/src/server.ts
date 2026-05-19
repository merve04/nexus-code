// 1. GEREKLİ PAKETLERİ ÇAĞIR (Artık require yerine import kullanıyoruz)
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { authKontrol } from "./middleware/auth.js";

// Ayarları yükle
dotenv.config();

// 2. MODELİ ÇAĞIR
// Not: Models klasöründeki User.js'i de ilerde .ts yapacağız ama şimdilik böyle kalsın
// @ts-ignore
import Kullanici from "./models/User.js";

const app = express();
// TS burada "Ya MONGO_URI yoksa?" diye uyarır, o yüzden varsayılan değer ekleriz
const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT || 5000;

// 3. MONGODB BAĞLANTISI
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Mükemmel! MongoDB Kasasına Başarıyla Bağlanıldı! 🌿");
  })
  .catch((hata) => {
    console.log("Eyvah, Kasaya bağlanırken hata çıktı:", hata);
  });

// 4. ARA YAZILIMLAR (Gümrük)
app.use(cors());
app.use(express.json());

// 5. ROTALAR
app.get("/", (req: Request, res: Response) => {
  res.send("Nexus-Code Backend Sunucusu (TypeScript) Çalışıyor! 🚀");
});

// Kayıt İşlemi
app.post("/api/kayit", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("Müjde! React'tan bir kargo geldi:", { email, password });

    const varOlanKullanici = await Kullanici.findOne({ email });
    if (varOlanKullanici) {
      return res.status(400).json({ mesaj: "Bu e-posta zaten kayıtlı!" });
    }

    const yeniKullanici = new Kullanici({ email, password });
    await yeniKullanici.save();

    res.status(201).json({
      mesaj: "Kargon veritabanına başarıyla kaydedildi Merve!",
      kaydedilenEmail: email,
    });
  } catch (hata) {
    console.log("Kayıt sırasında bir sorun çıktı:", hata);
    res.status(500).json({ mesaj: "Veritabanı kayıt hatası!" });
  }
});

// Giriş İşlemi
app.post("/api/giris", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const varOlanKullanici = await Kullanici.findOne({ email });

    if (!varOlanKullanici) {
      return res.status(400).json({ mesaj: "Böyle bir kullanıcı bulunamadı!" });
    }
    const sifreDogruMu = await bcrypt.compare(
      password,
      varOlanKullanici.password,
    );
    if (!sifreDogruMu) {
      return res.status(400).json({ mesaj: "Yanlış şifreyi denediniz!" });
    }
    const token = jwt.sign(
      { id: varOlanKullanici._id }, // Payload: Kartın içinde hangi bilgi saklanacak?
      process.env.JWT_SECRET || "gizli-anahtar", // Secret: Kart hangi anahtarla mühürlenecek?
      { expiresIn: "1h" }, // Options: Bu kart kaç saat geçerli olsun? (1 saat)
    );
    res.status(200).json({
      mesaj: "Harika! Başarıyla giriş yaptınız.",
      token: token, // İşte o meşhur dijital kimlik!
    });
  } catch (hata) {
    console.log("Giriş sisteminde hata:", hata);
    res.status(500).json({ mesaj: "Sunucu hatası oluştu!" });
  }
});

// 6. SUNUCUYU BAŞLAT
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda ayaklandı!`);
});
app.get("/api/profil", authKontrol, (req: Request, res: Response) => {
  res.json({
    mesaj: "Hoş geldin Merve! Bu sayfayı sadece giriş yapanlar görebilir.",
    kullaniciDetay: (req as any).user, // Kartın içinden çıkan ID bilgisi
  });
});
