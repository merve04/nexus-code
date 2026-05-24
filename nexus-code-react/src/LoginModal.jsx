import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./context/AuthContext";

function LoginModal({ setIsModalOpen, setLoggedInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginView, setIsLoginView] = useState(true);

  const authContext = useContext(AuthContext);
  // GÖNDERİM FONKSİYONU (Pırıl pırıl, tek parça)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password }; // action'a gerek yok, kapılar farklı

    // Hangi formda olduğumuza göre doğru kapıyı (url) seçiyoruz
    const apiUrl = isLoginView
      ? "http://localhost:5000/api/giris"
      : "http://localhost:5000/api/kayit";

    try {
      console.log(`Sunucuya (${apiUrl}) Axios ile istek atılıyor...`);

      const response = await axios.post(apiUrl, userData);

      console.log("Backend'den gelen ham yanıt:", response.data);

      // 1. ADIM: Önce gelen token'ı güvenli bir değişkene kilitleyelim
      const gelenToken = response.data?.token;

      if (isLoginView && gelenToken && authContext) {
        authContext.login(gelenToken);
        authContext.fetchUserProfile(gelenToken);
        console.log("Token bulundu, hafızaya yazılıyor:", gelenToken);

        // 2. ADIM: Doğrudan localStorage'a yazarak React'ın hızına güvenmeme kuralını uyguluyoruz
        localStorage.setItem("token", gelenToken);

        // 3. ADIM: Context havuzumuzu güncelliyoruz
        if (authContext) {
          authContext.login(gelenToken);
        }
      }

      alert(response.data.mesaj);

      // 4. ADIM: Her şey diske güvence kaydedildikten sonra arayüzü kapatıyoruz
      setLoggedInUser(email);
      setIsModalOpen(false);
    } catch (error) {
      console.error("İşlem Başarısız:", error);
      const hataMesaji =
        error.response?.data?.mesaj || "Bağlantı hatası! Sunucu açık mı?";
      alert(hataMesaji);
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
