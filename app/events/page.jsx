"use client";

// Components
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { useEffect, useState } from "react";
import { getEvents } from "@/helper/appwrite-helpers";
import Loader from "@/components/ui/Loader";
import Pagination from "@/components/admin/ui/Pagination";
import { litevents } from "@/data/lit";

// Helper

export default function (props) {
  const [events, setEvents] = useState({ total: 0, documents: [] });
  const [page, setPage] = useState(1);
  const [capacity, setCapacity] = useState(25);
  async function init() {
    setEvents(await getEvents());
  }
  useEffect(() => {
    init();
  }, [page, capacity]);
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

        <div>
          {events.documents.length > 0 ? (
            <>
              <div className="grid gap-6 lg:grid-cols-2">
                {events.documents.map((event) => (
                  <Card key={event.$id} {...event} />
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
        {/* <Pagination
          page={page}
          setPage={setPage}
          capacity={capacity}
          setCapacity={setCapacity}
          total={events.total}
        /> */}
      </div>
      <Footer />
    </>
  );
}

function Card(props) {
  const {
    eventName,
    eventPoster,
    $createdAt,
    organizingCouncil,
    description,
    $id,
  } = props;

  let refinedName = eventName;
  if (refinedName.indexOf("(") > -1) {
    refinedName = refinedName.substr(0, refinedName.indexOf("("));
  }
  if (refinedName.indexOf(":") > -1) {
    refinedName = refinedName.substr(0, refinedName.indexOf(":"));
  }
  const date = new Date($createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  return (
    <a
      className="relative block group rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href={`/events/${$id}`}
    >
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img
          className="absolute top-0 object-cover size-full start-0"
          src={eventPoster}
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
              <p className="text-xs text-white/[.8]">
                {formattedDate || "N/A"}
              </p>
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
          {/* <p className="mt-2 text-white/[.8]">{description}</p> */}
        </div>
      </div>
    </a>
  );
}
function PfacCard(props) {
  const { eventName, id, image, organizingCouncil, addedOn } = props;

  return (
    <a
      href={`/events/lit/${id}`}
      className="relative block group rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
    </a>
  );
}
