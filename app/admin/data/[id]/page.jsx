"use client";
import Pagination from "@/components/admin/ui/Pagination";
import Loader from "@/components/ui/Loader";
import { events } from "@/data/landing-event";
import {
  getEventWithoutImage,
  getRegistrationsByEventId,
} from "@/helper/appwrite-helpers";
import exportToExcel from "@/helper/excelHelper";
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
  function downloadData() {
    console.log(registrations);
    exportToExcel(registrations.documents, event.documents[0].eventName);
  }
  if (registrations.flag === false) return <div>Eror fetching data</div>;
  if (events.total == 0 && registrations.flag === true)
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 sm:flex-row">
        <Loader />
        <span>Fetching records...</span>
      </div>
    );
  return (
    <div className="p-8">
      {event.total > 0 && (
        <div className="my-6 text-2xl ">
          <span>{event.documents[0].eventName} Registrations</span>
          <div className="p-2 my-4 ">
            <button onClick={downloadData} className="p-2 border rounded-md">
              Download
            </button>
          </div>
        </div>
      )}

      {registrations.total > 0 && registrations.flag == true && (
        <div>
          <div className="mt-8 overflow-x-auto ">
            <Display data={registrations.documents} />
            <Pagination
              page={page}
              setPage={setPage}
              capacity={capacity}
              setCapacity={setCapacity}
              total={registrations.total}
              display={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Display({ data }) {
  return (
    <table className="w-full overflow-auto bg-white border border-gray-300">
      <thead>
        <tr>
          {/* <th className="px-4 py-2 border-b">userId</th> */}
          <th className="px-4 py-2 border-b">eventName</th>
          {/* <th className="px-4 py-2 border-b">registrationId</th> */}
          <th className="px-4 py-2 border-b">name</th>
          <th className="px-4 py-2 border-b">type</th>
          <th className="px-4 py-2 border-b">pno</th>
          <th className="px-4 py-2 border-b">email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.$id}
            className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
          >
            {/* <td className="px-4 py-2 border-b">{item.userId}</td> */}
            <td className="px-4 py-2 border-b">{item.eventName}</td>
            {/* <td className="px-4 py-2 border-b">{item.registrationId}</td> */}
            <td className="px-4 py-2 border-b">{item.name}</td>
            <td className="px-4 py-2 border-b">{item.type}</td>
            <td className="px-4 py-2 border-b">{item.pno}</td>
            <td className="px-4 py-2 border-b">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
