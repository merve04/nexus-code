const ozellikler = document.getElementById("ozellikler");
const hakkimizda = document.getElementById("hakkimizda");
const ozelliklerBaslik = document.getElementById("ozelliklerBaslik");
const hakkimizdaBaslik = document.getElementById("hakkimizdaBaslik");
const giris = document.getElementById("giris");
const kullanici = document.getElementById("kullanici");
const sifreGiris = document.getElementById("sifreGiris");
const girisGonder = document.getElementById("girisGonder");
const kullaniciGiris = document.getElementById("kullaniciGiris");
const kayitGonder = document.getElementById("kayitGonder");
const sifreKayit = document.getElementById("sifreKayit");
const girisKutusu = document.getElementById("girisKutusu");
const alanGiris = document.getElementById("alanGiris");
const alanKayit = document.getElementById("alanKayit");
const linkKaydol = document.getElementById("linkKaydol");
const linkGirisYap = document.getElementById("linkGirisYap");
const kapatmaTusu = document.getElementById("kapatmaTusu");
const hataMesajSifre = document.getElementById("hataMesajSifre");
const ozelliklerKutusu = document.getElementById("ozelliklerKutusu");
// ÖZELLİKLER VERİ SETİ
const ozelliklerListesi = [
  {
    baslik: "Gerçek Zamanlı Paylaşım",
    aciklama:
      "Ekip arkadaşlarınızla aynı dosya üzerinde aynı anda çalışın. Değişiklikleri anında görün, kod çakışmalarını ortadan kaldırın.",
    svgPath:
      "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    baslik: "Entegre Terminal",
    aciklama:
      "Kendi bilgisayarınızı yormadan, kodlarınızı doğrudan tarayıcı üzerindeki bulut terminalinde derleyin. Projelerinizi test edin.",
    svgPath: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    baslik: "Bulut Depolama",
    aciklama:
      "Tüm çalışma alanlarınız güvenle yedeklenir. İstediğiniz bilgisayardan giriş yapıp kaldığınız yerden kodlamaya devam edin.",
    svgPath:
      "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
  },
];

ozellikler.addEventListener("click", function () {
  ozelliklerBaslik.scrollIntoView({ behavior: "smooth" });
});

hakkimizda.addEventListener("click", function () {
  hakkimizdaBaslik.scrollIntoView({ behavior: "smooth" });
});
giris.addEventListener("click", function () {
  girisKutusu.classList.remove("hidden");
});

kapatmaTusu.addEventListener("click", function () {
  girisKutusu.classList.add("hidden");
});
linkKaydol.addEventListener("click", function (e) {
  e.preventDefault();
  alanGiris.classList.remove("flex");
  alanGiris.classList.add("hidden");
  alanKayit.classList.remove("hidden");
  alanKayit.classList.add("flex");
});
linkGirisYap.addEventListener("click", function (e) {
  e.preventDefault();
  alanKayit.classList.remove("flex");
  alanKayit.classList.add("hidden");
  alanGiris.classList.remove("hidden");
  alanGiris.classList.add("flex");
});
kayitGonder.addEventListener("click", function (e) {
  e.preventDefault();
  let sifreKayitVerisi = sifreKayit.value;
  if (sifreKayitVerisi.length < 6) {
    hataMesajSifre.innerHTML = "Şifre en az 6 karakter uzunluğunda olmalıdır";
    hataMesajSifre.classList.remove("hidden");
  }
});
// ozelliklerListesi içindeki her bir objeye sırayla 'kart' adını veriyoruz
const uretilenKartlar = ozelliklerListesi
  .map(function (kart) {
    // İçine verilerin gömüldüğü HTML kodunu geri gönderiyoruz
    return `
    <div class="bg-[#73716d] p-4 rounded-3xl hover:-translate-y-12 transition-all ease-in-out duration-500">
      <div class="flex items-center gap-4">
        <svg class="size-10 text-gray-900 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="${kart.svgPath}" />
        </svg>
        <h4 class="text-gray-900 mb-1 text-3xl font-bold">${kart.baslik}</h4>
      </div>
      <p class="text-white text-lg font-[monaco]">
        ${kart.aciklama}
      </p>
    </div>
  `;
  })
  .join(""); // .join("") çok önemlidir! HTML bloklarının arasına virgül koymasını engeller.
ozelliklerKutusu.innerHTML = uretilenKartlar;
