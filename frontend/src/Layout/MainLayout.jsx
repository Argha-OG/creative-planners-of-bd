import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export function MainLayout({ children }) {
  return (
    <div className="scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <Navbar />
      <div className="pt-16">{children}</div>
      <Footer />
    </div>
  );
}
