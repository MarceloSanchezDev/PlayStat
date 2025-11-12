import React from "react";
import HeaderComponent from "../components/Header/HeaderDashboard/HeaderDashboard";
export default function Layout({ children }) {
  return (
    <>
      <HeaderComponent />

      {children}
    </>
  );
}
