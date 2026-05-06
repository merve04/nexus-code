import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Main from "./MainContent";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import Hakkimizda from "./Hakkimizda";
import Ozellikler from "./Ozellikler";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div className="bg-[#08090a] min-h-screen flex flex-col">
      <Navbar
        setIsModalOpen={setIsModalOpen}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/ozellikler" element={<Ozellikler />} />
        </Routes>
      </div>

      <Footer />

      {isModalOpen && (
        <LoginModal
          setIsModalOpen={setIsModalOpen}
          setLoggedInUser={setLoggedInUser}
        />
      )}
    </div>
  );
}

export default App;
