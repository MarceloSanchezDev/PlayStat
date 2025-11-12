"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState(false);
  const router = useRouter();
  const login = () => setUser(true);
  const logout = () => setUser(false);

  // Chequeo de sesión por cookie httpOnly vía /api/auth/check
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/auth/check", { method: "GET" });
        // Si 200, ya está autenticado
        if (res.ok) {
          login();
          const data = await res.json();
          if (alive && data?.authenticated) {
            router.replace("/dashboard");
          }
        }
      } catch {
        logout();
        const data = await res.json();
        if (alive && !data?.authenticated) {
          router.replace("/login");
        }
      }
    })();
    return () => {
      alive = false;
    };
  }, [router]);
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
export function useUser() {
  return useContext(UserContext);
}
