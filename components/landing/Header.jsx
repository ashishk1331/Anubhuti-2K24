"use client";

// Libraries
import Image from "next/image";
import { CaretDown, List, X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Helper
import background from "/public/landing/crowd.jpg";

export default function (props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-between w-full min-h-screen text-white bg-gray-900">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-[2]">
        <Image
          src={background}
          layout="fill"
          objectFit="cover"
          alt="Header background"
          placeholder="blur"
        />
      </div>

      <header className="absolute flex flex-col gap-1 inset-0 w-full z-[3]">
        <nav className="flex items-center justify-between p-6 sm:p-8 sm:px-12">
          <div className="font-medium uppercase">anubhuti</div>
          <button className="p-2 rounded-md sm:hidden">
            {isOpen ? (
              <X
                size={24}
                onClick={() => setIsOpen(false)}
                className="transition-all"
              />
            ) : (
              <List
                size={24}
                onClick={() => setIsOpen(true)}
                className="transition-all"
              />
            )}
          </button>
          <ul className="items-center hidden gap-12 sm:flex">
            <NavItems />
          </ul>
        </nav>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex flex-col items-center gap-4 p-4 py-8 border-white sm:hidden backdrop-blur-md border-y-2"
            >
              <NavItems />
            </motion.ul>
          )}
        </AnimatePresence>
      </header>

      <div className="m-auto z-[3] flex flex-col items-center text-center mix-blend-difference">
        <h1 className="text-5xl sm:text-8xl md:text-[9rem] xl:text-[12rem] font-black text-center pt-20 text-voilet hover:text-white transition-all duration-[1500ms]">
          ANUBHUTI '24
        </h1>
      </div>

      <div className="flex flex-col items-center gap-4 absolute bottom-0 left-1/2 -translate-x-1/2 z-[3] mb-4">
        <CaretDown size={24} className="text-white animate-bounce" />
      </div>
    </div>
  );
}

function NavItems() {
  return (
    <>
      <li>
        <a href="#events" className="transition-all hover:underline">
          Events
        </a>
      </li>
      <li>
        <a href="#gallery" className="transition-all hover:underline">
          Gallery
        </a>
      </li>
      <li>
        <a href="#register" className="transition-all hover:underline">
          Register
        </a>
      </li>
      <li>
        <a href="/contribute" className="transition-all hover:underline">
          Contribute
        </a>
      </li>
    </>
  );
}
