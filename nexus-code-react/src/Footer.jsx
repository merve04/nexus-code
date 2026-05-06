function Footer() {
  return (
    <footer>
      <div className="bg-[#000000] text-[#edecec] w-full">
        <p className="text-center text-2xl mb-2 font-bold">NEXUS CODE</p>
        <p className="text-lg pl-4">Merve Babayiğit</p>
        <p className="text-lg pl-4">Bilgisayar Mühendisliği Öğrencisi</p>
        <div className="flex flex-2 gap-5 pl-4">
          <a
            className="text-lg hover:text-gray-900"
            href="https://github.com/merve04"
          >
            Github
          </a>
          <a
            className="text-lg hover:text-gray-900"
            href="https://www.linkedin.com/in/merve-babayi%C4%9Fit-416063304/"
          >
            Linkedin
          </a>
        </div>
        <p className="text-end p-4">© 2026 Nexus-Code. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}
export default Footer;