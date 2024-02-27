"use client";

// Components
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { musicevents } from "@/data/music-events";
import { dramaticsEvents } from "@/data/dramatic-events";
import { danceEvents } from "@/data/dance-events";
import { pfacevents } from "@/data/pfac-events";

// Helper

export default function (props) {
  return (
    <>
      <Header />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Events
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            This year we have a number of great events lined up for you. From
            dancing to singing, we have it all.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {musicevents.map((event) => (
            <Card type="music" key={event.id} {...event} />
          ))}
          {pfacevents.map((event) => (
            <PfacCard type="pfac" key={event.id} {...event} />
          ))}
          {dramaticsEvents.map((event) => (
            <Card type="drama" key={event.id} {...event} />
          ))}
          {danceEvents.map((event) => (
            <Card type="dance" key={event.id} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

function Card(props) {
  const { eventName, summary, id, image, type, organizingCouncil, addedOn } =
    props;
  let refinedName = eventName;
  if (refinedName.indexOf("(") > -1) {
    refinedName = refinedName.substr(0, refinedName.indexOf("("));
  }
  if (refinedName.indexOf(":") > -1) {
    refinedName = refinedName.substr(0, refinedName.indexOf(":"));
  }

  return (
    <a
      className="relative block group rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href={`/events/${type}/${id}`}
    >
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img
          className="absolute top-0 object-cover size-full start-0"
          src={image.src}
          alt="Image Description"
        />
      </div>
      {/* Avatar Starts */}
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="size-[46px] border-2 border-white rounded-full"
                src="/anubhuti_logo.png"
                alt="Image Description"
              />
            </div>
            <div className="ms-2.5 sm:ms-4">
              <h4 className="font-semibold text-white">
                {organizingCouncil || "KNIT"}
              </h4>
              <p className="text-xs text-white/[.8]">{addedOn || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Avatar Ends */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-white sm:text-3xl group-hover:text-yellow-500">
            {refinedName}
          </h3>
          <p className="mt-2 text-white/[.8]">{summary}</p>
        </div>
      </div>
    </a>
  );
}
function PfacCard(props) {
  const { eventName, id, image, organizingCouncil, addedOn } = props;

  return (
    <div className="relative block group rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img
          className="absolute top-0 object-cover size-full start-0"
          src={image.src}
          alt="Image Description"
        />
      </div>
      {/* Avatar Starts */}
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="size-[46px] border-2 border-white rounded-full"
                src="/anubhuti_logo.png"
                alt="Image Description"
              />
            </div>
            <div className="ms-2.5 sm:ms-4">
              <h4 className="font-semibold text-white ">
                {organizingCouncil || "KNIT"}
              </h4>
              <p className="text-xs text-white/[.8]">{addedOn || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Avatar Ends */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-white sm:text-3xl group-hover:text-yellow-500">
            {eventName}
          </h3>
          {/* <p className="mt-2 text-white/[.8]">{summary}</p> */}
        </div>
      </div>
    </div>
  );
}
