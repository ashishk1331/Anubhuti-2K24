"use client";
// Libraries
import { useState, useEffect } from "react";

// Helper
import { useStore } from "@/store/useForm.store.js";
import { account } from "@/Appwrite/appwrite.config";
import toast from "react-hot-toast";

export default function (props) {
  const loggedInUser = useStore((state) => state.loggedInUser);
  const setLoggedInUser = useStore((state) => state.setLoggedInUser);
  const [name, setName] = useState(null);
  async function handleLogout() {
    try {
      const promise = await account.deleteSessions();
      setLoggedInUser(null);
    } catch (error) {
      toast.error("Error Logging Out");
    }
  }
  function getName() {
    if (loggedInUser.name) {
      const [firstName, ...rest] = loggedInUser.name.split(" ");
      return firstName;
    } else if (loggedInUser.email) {
      const [firstName, ...rest] = loggedInUser.email.split("@");
      return firstName;
    }
  }

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
              href="/donate"
            >
              Donate
            </a>
            <div>
              {loggedInUser ? (
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    className="flex items-center gap-x-3.5 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    href="/profile"
                  >
                    {getName()}
                  </a>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-gray-800 text-start"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <a
                  className="flex items-center font-medium text-gray-500 gap-x-2 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6"
                  href="/login"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  Log in
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
