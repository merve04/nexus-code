import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// 1. Arayüze fetchUserProfile fonksiyonunu ekledik
interface AuthContextType {
  user: any;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  fetchUserProfile: (token: string) => void; // Yeni kurye fonksiyonumuz
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );
  const [user, setUser] = useState<any>(null);

  // Profil verisini backend'den çeken fonksiyon
  const fetchUserProfile = async (token: string) => {
    try {
      const res = await axios.get("http://localhost:5000/api/profil", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.kullaniciDetay);
    } catch (err) {
      console.error("Profil bilgisi alınamadı");
      setUser(null);
    }
  };

  // Sayfa yüklendiğinde otomatik çağır
  useEffect(() => {
    const saklananToken = localStorage.getItem("token");
    if (saklananToken) {
      setToken(saklananToken);
      fetchUserProfile(saklananToken);
    }
  }, []);

  const login = (yeniToken: string) => {
    localStorage.setItem("token", yeniToken);
    setToken(yeniToken);
    // Giriş anında hemen profil verisini çekmek için tetikliyoruz
    fetchUserProfile(yeniToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    // value içine fetchUserProfile'ı eklemeyi unutma
    <AuthContext.Provider
      value={{ user, token, login, logout, fetchUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
