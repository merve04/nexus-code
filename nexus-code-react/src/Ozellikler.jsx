import React from "react";

function Ozellikler() {
  const ozelliklerListesi = [
    {
      id: 1,
      baslik: "Gerçek Zamanlı Paylaşım",
      aciklama:
        "Ekip arkadaşlarınızla aynı dosya üzerinde aynı anda çalışın. Değişiklikleri anında görün, kod çakışmalarını ortadan kaldırın.",
      svgPath:
        "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    },
    {
      id: 2,
      baslik: "Entegre Terminal",
      aciklama:
        "Kendi bilgisayarınızı yormadan, kodlarınızı doğrudan tarayıcı üzerindeki bulut terminalinde derleyin. Projelerinizi test edin.",
      svgPath: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
    },
    {
      id: 3,
      baslik: "Bulut Depolama",
      aciklama:
        "Tüm çalışma alanlarınız güvenle yedeklenir. İstediğiniz bilgisayardan giriş yapıp kaldığınız yerden kodlamaya devam edin.",
      svgPath:
        "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-10">
      <h2 className="text-center text-[#bfb7a9] text-6xl mb-6 font-[monaco]">
        Özellikler
      </h2>
      <h3 className="text-[#edecec] text-center text-2xl font-[monaco] mb-20 max-w-4xl">
        Takımınızla projeler geliştirirken ihtiyacınız olan tüm araçlar elinizin
        altında. Kurulum yok, gecikme yok.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40 w-full max-w-6xl">
        {ozelliklerListesi.map((ozellik) => (
          <div
            key={ozellik.id}
            className="bg-[#121416] p-8 rounded-2xl border border-gray-800 hover:border-[#bfb7a9] transition-colors flex flex-col items-center text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-[#bfb7a9] mb-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={ozellik.svgPath}
              />
            </svg>

            <h3 className="text-[#edecec] text-2xl font-bold mb-4 font-[monaco]">
              {ozellik.baslik}
            </h3>
            <p className="text-gray-400 leading-relaxed">{ozellik.aciklama}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ozellikler;
