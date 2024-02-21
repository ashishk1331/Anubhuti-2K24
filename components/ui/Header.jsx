"use client";
// Libraries
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Helper
import Adminstatus from "./AdminStatus";
import RegistrationStatus from "./RegistrationStatus";
import SessionStatus from "./SessionStatus";

export default function (props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-50 flex flex-wrap w-full py-3 text-sm bg-white border-b border-gray-200 sm:justify-start sm:flex-nowrap sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="relative w-full px-4 mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold text-voilet"
            href="/"
            aria-label="Brand"
          >
            Anubhuti
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="flex items-center justify-center text-sm font-semibold text-gray-800 border border-gray-200 rounded-lg hs-collapse-toggle size-9 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
              onClick={(e) => setIsOpen(!isOpen)}
            >
              <svg
                className="hs-collapse-open:hidden size-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="flex-shrink-0 hidden hs-collapse-open:block size-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="navbar-collapse-with-animation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:hidden"
            >
              <div className="flex flex-col mt-5 gap-y-4 gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                <a
                  className="font-medium text-gray-500 hover:text-voilet sm:py-6"
                  href="/"
                  aria-current="page"
                >
                  Landing
                </a>
                <a
                  className="font-medium text-gray-500 hover:text-voilet sm:py-6"
                  href="/events"
                >
                  Events
                </a>
                <a
                  className="font-medium text-gray-500 hover:text-voilet sm:py-6"
                  href="/contribute"
                >
                  Contribute
                </a>
                <Adminstatus />
                <RegistrationStatus />
                <SessionStatus />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          id="navbar-collapse-with-animation"
          className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block"
        >
          <div className="flex flex-col mt-5 gap-y-4 gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <a
              className="font-medium text-gray-500 hover:text-voilet sm:py-6"
              href="/"
              aria-current="page"
            >
              Landing
            </a>
            <a
              className="font-medium text-gray-500 hover:text-voilet sm:py-6"
              href="/events"
            >
              Events
            </a>
            <a
              className="font-medium text-gray-500 hover:text-voilet sm:py-6"
              href="/contribute"
            >
              Contribute
            </a>
            <Adminstatus />
            <RegistrationStatus />
            <SessionStatus />
          </div>
        </div>
      </nav>
    </header>
  );
}
