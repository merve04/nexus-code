import { Link, NavLink } from "react-router-dom";
function Navbar({ setIsModalOpen, loggedInUser, setLoggedInUser }) {
  return (
    <nav className="bg-[#08090a] sticky top-0 z-50 grid grid-cols-3 items-center px-10 text-[#edecec] font-serif py-2 text-xl font-bold">
      <div className="flex justify-start">
        <Link to="/" className="text-[#edecec] inline-block">
          NEXUS CODE
        </Link>
      </div>
      <div className="flex justify-center gap-8 text-[#edecec]">
        <NavLink
          to="./Ozellikler"
          id="ozellikler"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-b-2 border-white pb-1"
              : "text-gray-400 hover:text-white transition-colors"
          }
        >
          Özellikler
        </NavLink>

        <NavLink
          to="./Hakkimizda"
          id="hakkimizda"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-b-2 border-white pb-1"
              : "text-gray-400 hover:text-white transition-colors"
          }
        >
          Hakkımızda
        </NavLink>
      </div>
      <div className="flex justify-end">
        {loggedInUser ? (
          <div className="flex items-center gap-3">
            <span className="text-sm font-sans text-gray-400">Hoş geldin,</span>
            <span className="bg-[#edecec] text-black px-4 py-1 rounded-2xl font-sans text-sm">
              {loggedInUser}
            </span>
            <button
              onClick={() => setLoggedInUser(null)}
              className="text-xs text-red-500 hover:text-red-400 underline ml-2"
            >
              Çıkış Yap
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            id="giris"
            className="w-fit bg-[#edecec] rounded-2xl p-1 px-4 text-black hover:bg-gray-300 transition-colors"
          >
            Giriş Yap
          </button>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
