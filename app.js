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

ozellikler.addEventListener("click", function () {
  ozelliklerBaslik.scrollIntoView({ behavior: "smooth" });
});

hakkimizda.addEventListener("click", function () {
  hakkimizdaBaslik.scrollIntoView({ behavior: "smooth" });
});
giris.addEventListener("click", function () {
  girisKutusu.classList.remove("hidden");
});
girisGonder.addEventListener("click", function () {});
kayitGonder.addEventListener("click", function () {});
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
