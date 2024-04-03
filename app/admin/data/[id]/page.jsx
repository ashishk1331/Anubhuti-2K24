"use client";

import { DownloadSimple } from "@phosphor-icons/react";
import Pagination from "@/components/admin/ui/Pagination";
import Loader from "@/components/ui/Loader";
import { events } from "@/data/landing-event";
import {
  getAllRegistrationsByEventId,
  getEventWithoutImage,
  getRegistrationsByEventId,
} from "@/helper/appwrite-helpers";
import exportToExcel from "@/helper/excelHelper";
import Table from "@/components/admin/ui/Table.jsx";
import { useEffect, useState } from "react";

export default function ({ params: { id } }) {
  const [registrations, setRegistrations] = useState({
    total: 0,
    documents: [],
    flag: true,
  });
  const [event, setEvent] = useState({
    total: 0,
    documents: [],
    flag: true,
  });
  const [page, setPage] = useState(1);
  const [capacity, setCapacity] = useState(20);

  async function init() {
    setEvent(await getEventWithoutImage(id));
    const data = await getRegistrationsByEventId(id, page, capacity);
    setRegistrations(data);
  }
  useEffect(() => {
    init();
  }, [page, capacity]);
  async function downloadData() {
    const data = await getAllRegistrationsByEventId(id);
    console.log(data);
    if (data.flag === true)
      exportToExcel(data.documents, event.documents[0].eventName);
  }
  if (registrations.flag === false) return <div>Eror fetching data</div>;
  if (events.total == 0 && registrations.flag === true)
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 sm:flex-row">
        <Loader />
        <span>Fetching records...</span>
      </div>
    );

  const columns = [
    {
      header: "name",
      key: "name",
    },
    {
      header: "type",
      key: "type",
    },
    {
      header: "phone number",
      key: "pno",
    },
    {
      header: "email",
      key: "email",
    },
  ];

  return (
    <div className="px-8">
      {event.total > 0 && (
        <div className="grid gap-3 px-6 py-4 mb-6 md:flex md:justify-between md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {event.documents[0].eventName} Registrations
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              All registrations for the event.
            </p>
          </div>
          <div>
            <div className="inline-flex gap-x-2">
              <button
                id="hs-as-table-table-export-dropdown"
                type="button"
                onClick={downloadData}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <DownloadSimple />
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {registrations.total > 0 && registrations.flag == true ? (
        <>
          <Table events={registrations.documents} columns={columns} />
          <Pagination
            page={page}
            setPage={setPage}
            capacity={capacity}
            setCapacity={setCapacity}
            total={registrations.total}
            display={false}
          />
        </>
      ) : (
        <div className="bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active">
          <p className="text-gray-800">No records available.</p>
        </div>
      )}
    </div>
  );
}
