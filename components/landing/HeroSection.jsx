import React from "react";
import { Navbar } from "./Navbar.jsx";
// import './HeroSection.css';
export const HeroSection = () => {
  return (
    <div className="bg-[url('/landing/hero-background.jpg')]  relative flex flex-col items-center justify-center bg-black h-[100vh] ">
      <div className="flex items-center justify-center w-full">
        <span className="text-white font-bold text-5xl lg:text-9xl mb-5 md:text-7xl ">ANUBHUTI'24</span>
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
};
