import React from "react";
import HeaderComponent from "../components/Header/Header/Header";
export default function Layout({ children }) {
  return (
    <>
      <HeaderComponent />

      {children}
    </>
  );
}
