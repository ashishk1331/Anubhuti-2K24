"use client";
import Loader from "@/components/ui/Loader";
import {
  getEventRegistrations,
  getEventWithoutImage,
  getEventsWithoutImage,
} from "@/helper/appwrite-helpers";
import { useEffect, useState } from "react";

export default function () {
  const [events, setEvents] = useState({ total: 0, documents: [], flag: true });
  async function init() {
    const data = await getEventsWithoutImage();
    setEvents(data);
  }
  useEffect(() => {
    init();
  }, []);
  if (events.flag === false) return <div>Eror fetching data</div>;
  return (
    <div className="p-8">
      {events.total >= 0 && events.flag == true ? (
        <div>
          <div className="my-6 text-3xl">Get Event Registrations</div>
          <ul>
            {events.documents.map((data, index) => {
              return <Card key={data.$id} data={data} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 sm:flex-row">
          <Loader />
          <span>Fetching records...</span>
        </div>
      )}
    </div>
  );
}
function Card({ data }) {
  return (
    <li>
      <a href={`/admin/data/${data.$id}`}>{data.eventName}</a>
    </li>
  );
}
