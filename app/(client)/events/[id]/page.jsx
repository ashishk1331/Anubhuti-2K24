"use client";

// Components
import Form from "@/components/events/EventForm.jsx";
import Avatar from "@/components/events/Avatar";
import EventDescription from "@/components/events/EventDescription";
import { useEffect, useState } from "react";
import { getEvent } from "@/helper/appwrite-helpers";
import Loader from "@/components/ui/Loader";
import { status } from "@/data/config";

// Helper

export default function ({ params: { id } }) {
  const [event, setEvent] = useState({ total: 0, documents: [] });
  const [error, setError] = useState(false);
  async function init() {
    const data = await getEvent(id);
    if (data.flag == false) setError(true);
    setEvent(data);
  }
  useEffect(() => {
    init();
  }, []);
  return error ? (
    <div className="p-10 min-h-[60vh] text-base text-gray-600 flex justify-center items-center">
      Failed to fetch data
    </div>
  ) : (
    <>
      {event.total > 0 ? (
        <>
          <div className="max-w-3xl px-4 pt-2 pb-12 mx-auto lg:pt-5 sm:px-6 lg:px-8 marker:text-voilet"></div>
          <Display event={event.documents[0]} />
          {status ? (
            <Form event={event.documents[0]} />
          ) : (
            <RegistrationClosed />
          )}
        </>
      ) : (
        <div className="flex flex-col mx-auto items-center justify-center w-full h-[40vh] gap-4 sm:flex-row">
          <Loader />
          <span>fetching event...</span>
        </div>
      )}
    </>
  );
}

function RegistrationClosed() {
  return (
    <div className="max-w-4xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
      <div className="p-4 text-center bg-white shadow rounded-xl sm:p-7 dark:bg-slate-900">
        <p className="inline-block me-2">Registrations have been closed.</p>
      </div>
    </div>
  );
}

function Display({ event }) {
  return (
    <div className="max-w-2xl px-4 mx-auto">
      <Avatar event={event} />
      <div className="space-y-6 md:space-y-8">
        <EventDescription event={event} />
        <Brochure event={event} />
      </div>
    </div>
  );
}

function Brochure({ event }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="my-4 text-3xl font-bold md:text-4xl dark:text-white">
        Event Description
      </h2>
      <img src={event.image1} alt="Brochure 1" />
      <img src={event.image2} alt="Brochure 2" />
    </div>
  );
}
