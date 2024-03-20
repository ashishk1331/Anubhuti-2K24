"use client";
import { DownloadSimple } from "@phosphor-icons/react";
import { getAllRegistrations } from "@/helper/appwrite-helpers";
import exportToExcel from "@/helper/excelHelper";

export default function () {
  async function downloadRegistrationsData() {
    const data = await getAllRegistrations();
    exportToExcel(data.documents, "registrations");
  }
  return (
    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center">
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
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <DownloadSimple />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
