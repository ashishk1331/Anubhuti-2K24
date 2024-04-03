"use client";
import {
  Users,
  CalendarPlus,
  ClockClockwise,
  Ticket,
  SealCheck,
  Database,
  DownloadSimple,
  House,
  List,
  CurrencyInr,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Avatar from "avvvatars-react";
import { useStore } from "@/store/useForm.store";

/*
		<a href="/admin/users">Users</a>
        <a href="/admin/add-event">Add Event</a>
        <a href="/admin/update-event">Update Event</a>
        <a href="/admin/registrations">Registrations</a>
        <a href="/admin/all-transactions">All Transactions</a>
        <a href="/admin/verify-transactions">Verify Transactions</a>
        <a href="/admin/data">Registration data</a>
        <a href="/admin/download">Download data</a>
*/

export default function (props) {
  const loggedInUser = useStore((state) => state.loggedInUser);
  const email = loggedInUser ? loggedInUser.email : "";

  const pathname = usePathname().split("/");
  const endpoint = pathname.length < 2 ? "" : pathname[2];

  const baseURL = "/admin/";
  const IconStyles = {
    size: 20,
  };

  const SidebarContent = [
    {
      id: "dashboard",
      display: [<House {...IconStyles} />, <span>Dashboard</span>],
      href: "",
    },
    {
      id: "users",
      display: [<Users {...IconStyles} />, <span>Users</span>],
      href: "users",
    },
    {
      id: "add-event",
      display: [<CalendarPlus {...IconStyles} />, <span>Add Event</span>],
      href: "add-event",
    },
    {
      id: "update-event",
      display: [<ClockClockwise {...IconStyles} />, <span>Update Event</span>],
      href: "update-event",
    },
    {
      id: "registrations",
      display: [<Ticket {...IconStyles} />, <span>Registrations</span>],
      href: "registrations",
    },
    {
      id: "verify-transactions",
      display: [
        <SealCheck {...IconStyles} />,
        <span>Verify Transactions</span>,
      ],
      href: "verify-transactions",
    },
    {
      id: "All Transactions",
      display: [<CurrencyInr {...IconStyles} />, <span>All Transactions</span>],
      href: "all-transactions",
    },
    {
      id: "data",
      display: [<Database {...IconStyles} />, <span>Registrations Data</span>],
      href: "data",
    },
    {
      id: "download",
      display: [<DownloadSimple {...IconStyles} />, <span>Download Data</span>],
      href: "download",
    },
  ];

  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
        <nav
          className="flex items-center w-full px-4 mx-auto basis-full sm:px-6 md:px-8"
          aria-label="Global"
        >
          <div className="me-5 lg:me-0 lg:hidden">
            <a
              className="flex-none text-xl font-semibold text-voilet"
              href="/"
              aria-label="Brand"
            >
              Anubhuti
            </a>
          </div>
          <div className="flex items-center justify-end w-full ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="sm:hidden">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>
            <div className="flex flex-row items-center justify-end gap-2 ml-auto">
              <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                <a
                  href="/profile"
                  id="hs-dropdown-with-header"
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-voilet/50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <Avatar value={email} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      {/* Sidebar Toggle */}
      <div className="sticky inset-x-0 top-0 z-20 px-4 bg-white border-y sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          {/* Navigation Toggle */}
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <List size={20} />
          </button>
          {/* End Navigation Toggle */}
          {/* Breadcrumb */}
          <ol
            className="flex items-center ms-3 whitespace-nowrap"
            aria-label="Breadcrumb"
          >
            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
              Application Layout
              <svg
                className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-gray-600"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
          {/* End Breadcrumb */}
        </div>
      </div>
      {/* End Sidebar Toggle */}
      {/* Sidebar */}
      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="px-6">
          <a
            className="flex-none text-xl font-semibold text-voilet"
            href="/"
            aria-label="Brand"
          >
            Anubhuti
          </a>
        </div>
        <nav
          className="flex flex-col flex-wrap w-full p-6 hs-accordion-group"
          data-hs-accordion-always-open=""
        >
          <ul className="space-y-1.5">
            {SidebarContent.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className={twMerge(
                      "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100",
                      endpoint === item.href && "bg-gray-100"
                    )}
                    href={baseURL + item.href}
                  >
                    {item.display}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* End Sidebar */}
      {/* Content */}
      <div className="w-full px-4 pt-10 sm:px-6 md:px-8 lg:ps-72">
        {props.children}
      </div>
      {/* End Content */}
      {/* ========== END MAIN CONTENT ========== */}
    </>
  );
}
