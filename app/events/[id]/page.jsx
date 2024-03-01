"use client";

// Components
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Form from "@/components/events/EventForm.jsx";
import Rules from "@/components/events/Rules";
import JudgingCriteria from "@/components/events/JudgingCriteria";
import Rounds from "@/components/events/Rounds";
import Avatar from "@/components/events/Avatar";
import EventDescription from "@/components/events/EventDescription";
import Details from "@/components/events/Details";
import { useEffect, useState } from "react";
import { getEvent } from "@/helper/appwrite-helpers";
import Loader from "@/components/ui/Loader";

// Helper

export default function ({ params: { id } }) {
  const [event, setEvent] = useState({ total: 0, documents: [] });

  async function init() {
    setEvent(await getEvent(id));
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <Header />
      {event.total > 0 ? (
        <>
          <div className="max-w-3xl px-4 pt-2 pb-12 mx-auto lg:pt-5 sm:px-6 lg:px-8 marker:text-voilet"></div>
          <Display event={event.documents[0]} />
          <Form event={event.documents[0]} />
        </>
      ) : (
        <div className="flex flex-col mx-auto items-center justify-center w-full h-[40vh] gap-4 sm:flex-row">
          <Loader />
          <span>fetching event...</span>
        </div>
      )}
      <Footer />
    </>
  );
}

function Display({ event }) {
  return (
    <div className="max-w-2xl px-4 mx-auto">
      <Avatar event={event} />
      <div className="space-y-6 md:space-y-8">
        <EventDescription event={event} />
      </div>
    </div>
  );
}
