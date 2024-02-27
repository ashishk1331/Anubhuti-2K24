"use client";

// Components
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Form from "@/components/events/EventForm.jsx";

// Helper
import { dramaticsEvents } from "@/data/dramatic-events";
import EventDescription from "@/components/events/EventDescription";
import Rounds from "@/components/events/Rounds";
import Rules from "@/components/events/Rules";
import JudgingCriteria from "@/components/events/JudgingCriteria";
import Details from "@/components/events/Details";
import Avatar from "@/components/events/Avatar";

function getEventById(id) {
  return dramaticsEvents.find((event) => event.id === id);
}

export default function ({ params: { id } }) {
  const data = getEventById(id);
  return (
    <>
      <Header />
      {data && (
        <>
          <div className="max-w-3xl px-4 pt-6 pb-12 mx-auto lg:pt-10 sm:px-6 lg:px-8 marker:text-voilet">
            <div className="max-w-2xl">
              <Avatar data={data} />
              <div className="space-y-6 md:space-y-8">
                <EventDescription data={data} />
                {data.rounds && <Rounds rounds={data.rounds} />}
                {data.rules && <Rules rules={data.rules} />}
                {data.judgingCriteria && (
                  <JudgingCriteria criteria={data.judgingCriteria} />
                )}
                <Details data={data} />
              </div>
            </div>
          </div>
          <Form eventName={data.eventName} />
        </>
      )}
      {/* End Blog Article */}
      <Footer />
    </>
  );
}
