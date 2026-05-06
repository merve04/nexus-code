import Ozellikler from "./Ozellikler";

function Main() {
  return (
    <main className="mt-36 px-10">
      <div className="text-left">
        <h1 className="text-5xl text-[#bfb7a9] mb-4 font-[monaco]">
          Kod Yazmanın En Senkronize Hali
        </h1>
        <h2 className="text-xl text-[#bfb7a9] max-w-2xl mb-20 font-[monaco]">
          Gerçek zamanlı iş birliği ile takım arkadaşlarınızla aynı anda kod
          yazın. Projelerinizi tek bir çatı altında, gecikme olmadan geliştirin.
        </h2>
      </div>
      <div className="flex justify-center gap-16 text-4xl mb-8">
        <button className="text-[#bfb7a9] hover:bg-[#3c3e42] hover:text-[#edecec] rounded-2xl p-1.5 transition-all ease-in-out duration-500">
          Çalışma Alanı Oluştur
        </button>
        <button className="text-[#bfb7a9] hover:bg-[#3c3e42] hover:text-[#edecec] rounded-2xl p-1.5 transition-all ease-in-out duration-500">
          Özellikleri Keşfet
        </button>
      </div>
      <div className="flex justify-center w-full h mb-20">
        <img src="/github.png" className="max-w-6xl" />
      </div>

      <Ozellikler />

      <div className="bg-[#bfb7a9] flex items-center mb-40 rounded-2xl">
        <div className="md:w-3/5 ml-5">
          <img src="/editor.png" alt="Editör kısmına ait bir görsel" />
        </div>
        <div className="md:w-2/5 p-5">
          <h3 className="text-gray-900 text-4xl mb-2 font-bold">
            Geleceğin Kodlama Deneyimi: Hızlı, Güvenli ve Senkronize
          </h3>
          <p className="text-gray-900 text-2xl font-[monaco] mb-5">
            Nexus-Code, modern web geliştirmenin en güçlü yapı taşlarından biri
            olan MERN Stack (MongoDB, Express, React, Node.js) mimarisi üzerine
            inşa edilmiştir. React'in sunduğu dinamik arayüz, Node.js ve
            Express'in sağladığı yüksek performanslı sunucu altyapısıyla
            birleşerek, ekip arkadaşlarınızla aynı dosya üzerinde hiçbir gecikme
            (latency) yaşamadan çalışmanıza olanak tanır. Verileriniz MongoDB
            ile esnek ve güvenli bir şekilde depolanırken, projenin her
            aşamasında hız ve stabilite ön planda tutulmuştur.
          </p>
          <div className="flex flex-4 gap-4 text-[#edecec] text-3xl">
            <span className="bg-[#73716d] p-3 rounded-full hover:bg-[#211805]">
              MongoDB
            </span>
            <span className="bg-[#73716d] p-3 rounded-full hover:bg-[#211805]">
              Express
            </span>
            <span className="bg-[#73716d] p-3 rounded-full hover:bg-[#211805]">
              React
            </span>
            <span className="bg-[#73716d] p-3 rounded-full hover:bg-[#211805]">
              Node.js
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
