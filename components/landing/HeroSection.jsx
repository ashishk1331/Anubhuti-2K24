import React from "react";
import { Navbar } from "./Navbar.jsx";
// import './HeroSection.css';
export const HeroSection = () => {
  return (
    <div className="bg-[url('/landing/hero-background.jpg')] py-10 sm:py-0  relative flex flex-col items-center justify-center bg-black min-h-[100vh] ">
      <div className="flex items-center justify-center w-full">
        <span className="mb-5 text-5xl font-bold text-white lg:text-9xl md:text-7xl ">
          ANUBHUTI'24
        </span>
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
};
