import { useState } from "react";

function LoginModal({ setIsModalOpen, setLoggedInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginView, setIsLoginView] = useState(true);

  // GÖNDERİM FONKSİYONU (Pırıl pırıl, tek parça)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password }; // action'a gerek yok, kapılar farklı

    // Hangi formda olduğumuza göre doğru kapıyı (url) seçiyoruz
    const apiUrl = isLoginView
      ? "http://localhost:5000/api/giris"
      : "http://localhost:5000/api/kayit";

    try {
      console.log(`Sunucuya (${apiUrl}) istek atılıyor...`);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      // GÜVENLİK KONTROLÜ BURADA BAŞLIYOR!
      if (response.ok) {
        // Eğer backend "200" veya "201" (Başarılı) döndüyse:
        console.log("İşlem Başarılı:", data.mesaj);
        alert(data.mesaj); // "Başarıyla giriş yaptınız" veya "Kaydedildi" yazısını göster

        setLoggedInUser(email); // İçeri al
        setIsModalOpen(false); // Ekranı kapat
      } else {
        // Eğer backend "400" (Yanlış şifre vb.) döndüyse:
        console.error("İşlem Reddedildi:", data.mesaj);
        alert(data.mesaj); // Backend'in yolladığı o uyarıları ekrana bas!
        // DİKKAT: Burada setLoggedInUser ÇALIŞMIYOR, yani içeri giremiyor.
      }
    } catch (error) {
      console.error("Eyvah, sunucuya bağlanırken bir hata oluştu:", error);
      alert("Bağlantı hatası! Sunucu açık mı?");
    }
  };

  // EKRAN ÇİZİMİ (UI)
  return (
    <div id="girisKutusu" className="fixed z-50 inset-0 bg-black/80">
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative bg-[#bfb7a9] p-10 rounded-3xl flex flex-col items-center w-96">
          <button
            onClick={() => setIsModalOpen(false)}
            id="kapatmaTusu"
            className="absolute top-4 right-5 text-3xl font-bold text-gray-900 hover:text-red-600 transition-colors"
          >
            X
          </button>

          {isLoginView ? (
            <div id="alanGiris" className="w-full flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 font-[monaco]">
                Giriş Yap
              </h3>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full mb-8"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Kullanıcı Adı"
                  className="p-3 rounded-xl outline-none"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifrenizi Giriniz"
                  className="p-3 rounded-xl outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#08090a] text-white p-3 rounded-xl font-bold hover:bg-gray-800"
                >
                  Giriş Yap
                </button>
              </form>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLoginView(false);
                }}
                className="text-sm text-center text-gray-800 hover:underline"
              >
                Hesabınız yoksa oluşturun
              </a>
            </div>
          ) : (
            <div id="alanKayit" className="w-full flex-col items-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 font-[monaco]">
                Kayıt Ol
              </h3>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full mb-8"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta Adresiniz"
                  className="p-3 rounded-xl outline-none"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifre Oluşturun"
                  className="p-3 rounded-xl outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#08090a] text-white p-3 rounded-xl font-bold hover:bg-gray-800"
                >
                  Hesap Oluştur
                </button>
              </form>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLoginView(true);
                }}
                className="text-sm text-center text-gray-800 hover:underline"
              >
                Zaten hesabınız var mı? Giriş yapın
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
