"use client";
import { DownloadSimple } from "@phosphor-icons/react";
import {
  getAllRegistrations,
  getAllRegistrationsWithImage,
  getAllTransactionsWithImage,
} from "@/helper/appwrite-helpers";
import exportToExcel from "@/helper/excelHelper";

export default function () {
  async function downloadRegistrationsData() {
    const data = await getAllRegistrationsWithImage();
    console.log(data);
    if (data.flag === true) exportToExcel(data.documents, "Registrations");
  }
  async function downloadTransactionsData() {
    const data = await getAllTransactionsWithImage();
    console.log(data);
    if (data.flag === true) exportToExcel(data.documents, "Transactions");
  }
  return (
    <>
      <div className="grid gap-3 px-6 py-4 md:flex md:justify-between md:items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Registrations Data
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Download all registrations data in excel format.
          </p>
        </div>
        <div>
          <div className="inline-flex gap-x-2">
            <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
              <button
                id="hs-as-table-table-export-dropdown"
                type="button"
                onClick={downloadRegistrationsData}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <DownloadSimple />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-3 px-6 py-4 md:flex md:justify-between md:items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Transactions Data
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Download all transactions data in excel format.
          </p>
        </div>
        <div>
          <div className="inline-flex gap-x-2">
            <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
              <button
                id="hs-as-table-table-export-dropdown"
                type="button"
                onClick={downloadTransactionsData}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <DownloadSimple />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
