"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
const HeaderComponent = () => {
  const { user, logout } = useUser();
  const router = useRouter();
  async function HandleLogout() {
    const res = await fetch("/api/auth/logout", { method: "POST" });
    const data = await res.json();
    logout();
    console.log(data);
    router.replace("/login");
  }
  return (
    <header className="flex wh-100 flex justify-between items-center content-center">
      <Link href="/">
        <div className="flex px-5">
          <Image src="/Icono.png" width={72} height={64} alt="Icono" />
          <h1 className="text-start m-5 text-2xl text-shadow-sky-100 text-shadow-lg/20">
            {" "}
            PlayStat
          </h1>
        </div>
      </Link>
      {user && (
        <button onClick={HandleLogout} className="border rounded-sm p-2 mx-2">
          Cerrar sesión
        </button>
      )}
    </header>
  );
};

export default HeaderComponent;
