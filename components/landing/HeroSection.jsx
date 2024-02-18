import React from "react";
import { Navbar } from "./Navbar.jsx";
// import './HeroSection.css';
export const HeroSection = () => {
  return (
    <div className="bg-[url('/landing/hero-background.jpg')] relative flex flex-col items-center justify-center bg-black h-[100vh]">
      <div className="  flex items-center justify-center">
        <img
          src="/landing/antaragni-heading.png"
          className="w-[70%] ml-[30px] mr-[30px] mb-[20px]"
        ></img>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};
