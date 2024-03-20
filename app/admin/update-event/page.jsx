"use client";
import Loader from "@/components/ui/Loader";
import Cards from "@/components/admin/update-event/Card.jsx";

import { getEvents } from "@/helper/appwrite-helpers";
import { useEffect, useState } from "react";
import {
  ArrowSquareOut,
  Calendar,
  ClockAfternoon,
  CurrencyInr,
  MapPin,
  MapPinLine,
  Money,
  Shapes,
  UsersThree,
  Trash,
} from "@phosphor-icons/react/dist/ssr";

export default function () {
  const [events, setEvents] = useState({ total: 0, documents: [] });
  async function init() {
    setEvents(await getEvents());
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <div>
      {events.documents.length > 0 ? (
        <Cards events={events.documents} />
      ) : (
        <div className="flex flex-col w-full items-center justify-center h-[40vh] gap-4 sm:flex-row">
          <Loader />
          <span>Fetching Events...</span>
        </div>
      )}
    </div>
  );
}
