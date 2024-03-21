"use client";
import Loader from "@/components/ui/Loader";
import {
  getEventRegistrations,
  getEventWithoutImage,
  getEventsWithoutImage,
} from "@/helper/appwrite-helpers";

import Table from "@/components/admin/ui/Table.jsx";
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

  const columns = [
    {
      header: "name",
      key: "eventName",
      component: (event) => (
        <a href={"/admin/data/" + event.$id} className="underline text-voilet">
          {event.eventName}
        </a>
      ),
    },
    {
      header: "created by",
      key: "organizingCouncil",
    },
  ];

  return events.total >= 0 && events.flag == true ? (
    <Table
      title="Event Registrations"
      events={events.documents}
      columns={columns}
    />
  ) : (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 sm:flex-row">
      <Loader />
      <span>Fetching records...</span>
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
