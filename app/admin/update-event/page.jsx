"use client";
import Loader from "@/components/ui/Loader";
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
        <>
          <div className="flex flex-wrap justify-center gap-6 p-8 ">
            {events.documents.map((event) => (
              <Card event={event} key={event.$id} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col w-full items-center justify-center h-[40vh] gap-4 sm:flex-row">
          <Loader />
          <span>Fetching Events...</span>
        </div>
      )}
    </div>
  );
}

function Card({ event }) {
  return (
    <div className="relative m-4 w-full z-50 bg-white max-w-[350px] block  border-2 border-gray-300 group rounded-[1.5rem] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
      <div className="z-50 p-3 bg-white rounded-[1.5rem]">
        <div className="relative">
          <div className="absolute z-[-10] left-3 top-3 w-full max-w-[350px] rounded-[1.5rem] h-full bg-black"></div>
          <img
            className="h-[150px] bg-cover rounded-2xl w-full"
            src={event.eventPoster}
            alt="event Poster"
          />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-800 whitespace-pre-wrap">
              {event.eventName}
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href={`/admin/update-event/${event.$id}`}
              className="flex justify-center w-full gap-1 p-2 font-semibold text-center border rounded-full"
            >
              Edit Event
              <ArrowSquareOut size={22} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
