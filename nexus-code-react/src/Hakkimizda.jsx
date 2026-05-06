import React, { useState, useEffect } from "react";
import DegerKarti from "./DegerKarti";

function Hakkimizda() {
  const [detayGoster, setDetayGoster] = useState(false);

  const degerlerListesi = [
    {
      id: 1,
      baslik: "Misyonumuz",
      aciklama:
        "Modern web mimarileri olan MongoDB, Express, React ve Node.js kullanarak, geliştiricilerin sıfır gecikme ile kod yazabileceği, yenilikçi ve kesintisiz çalışma alanları yaratmak.",
    },
    {
      id: 2,
      baslik: "Vizyonumuz",
      aciklama:
        "Tüm yazılım dillerini harika bir arayüzde bir araya getirerek, sadece Türkiye'de değil, küresel çapta ekiplerin vazgeçilmez bulut tabanlı kodlama platformu olmak.",
    },
    {
      id: 3,
      baslik: "Takım Değerleri",
      aciklama:
        "Karmaşık sorunları temiz kod (clean code) ile çözmek, sürekli öğrenmek ve her zaman en iyi kullanıcı deneyimini (UX) sunmak için çalışmak.",
    },
  ];
  useEffect(() => {
    console.log("Hakkımızda sayfası DOM'a başarıyla eklendi (Mounted).");
  }, []);
  useEffect(() => {
    console.log(
      "Detay gösterme durumu güncellendi (Updated). Yeni değer: ",
      detayGoster,
    );
  }, [detayGoster]);

  return (
    <div className="py-20 px-10 text-white flex flex-col items-center">
      <h1 className="text-5xl font-bold font-[monaco] mb-16 text-[#bfb7a9]">
        Hakkımızda
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {degerlerListesi.map((tekilDeger) => (
          <DegerKarti
            key={tekilDeger.id}
            baslik={tekilDeger.baslik}
            aciklama={tekilDeger.aciklama}
          />
        ))}
      </div>
      <button
        className="mt-12 text-[#121416] bg-[#bfb7a9] hover:bg-[#edecec] px-6 py-3 rounded-xl font-bold transition-all duration-300"
        onClick={() => setDetayGoster(!detayGoster)}
      >
        {detayGoster ? "Gizle" : "Daha fazla bilgi"}
      </button>
      {detayGoster && (
        <p className="mt-8 text-xl text-gray-300 font-[monaco]">
          Nexus-Code 2024 yılında Zonguldak'ta temelleri atılmış bir projedir...
        </p>
      )}
    </div>
  );
}
export default Hakkimizda;
