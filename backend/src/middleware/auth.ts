import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// TypeScript'e Request'in içine "user" diye bir bilgi ekleyeceğimizi söylüyoruz
export interface AuthRequest extends Request {
  user?: any;
}

export const authKontrol = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  // 1. Kapıdaki kişinin "Authorization" başlığına (header) bakıyoruz
  const token = req.header("Authorization")?.split(" ")[1];

  // 2. Eğer hiç token yoksa içeri alma
  if (!token) {
    return res
      .status(401)
      .json({ mesaj: "Yetkisiz erişim, lütfen giriş yapın!" });
  }

  try {
    // 3. Pasaportu (token) bizim gizli anahtarımızla doğrula
    const dogrulanmisToken = jwt.verify(
      token,
      process.env.JWT_SECRET || "gizli-anahtar",
    );

    // 4. Kartın içindeki kullanıcı bilgisini isteğin (req) içine koy ki her yerden erişelim
    req.user = dogrulanmisToken;

    // 5. Her şey tamam, "Sıradaki işleme geçebilirsin" komutu
    next();
  } catch (hata) {
    res.status(401).json({ mesaj: "Geçersiz veya süresi dolmuş token!" });
  }
};
