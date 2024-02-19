import React from "react";
import { EventCard } from "./EventCard";
export default function Events({ eventsData }) {
  return (
    <div
      className="py-10 flex flex-col gap-10 items-center justify-center bg-[#000f1e]  transition-all duration-400 ease-in-out"
      id="Events"
    >
      <h2 className="text-[#efc36a] font-bold text-6xl -mt-[10px] mb-10">
        All Events
      </h2>
      <div className="grid flex-wrap items-center justify-between grid-cols-1 gap-10 px-2 sm:px-2 md:px-0 sm:grid-cols-2 md:grid-cols-3 place-content-stretch">
        {eventsData.map((eventData) => (
          <EventCard key={eventData.id} eventData={eventData} />
        ))}
      </div>
    </div>
  );
}
