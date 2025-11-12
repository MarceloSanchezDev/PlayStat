"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const HeaderComponent = () => {
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
    </header>
  );
};

export default HeaderComponent;
