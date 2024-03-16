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
import Image from "next/image";

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
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto mb-12 text-center lg:mb-16">
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
            <div className="flex flex-col gap-8 lg:gap-12">
              <div>
                <h3 className="text-xl font-bold sm:text-3xl text-voilet ml-2 my-8">
                  CULTURAL EVENTS
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {events.documents
                    .filter(
                      (item) => item.organizingCouncil === "CULTURAL COUNCIL"
                    )
                    .map((event) => (
                      <Card key={event.$id} {...event} />
                    ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold sm:text-3xl text-voilet ml-2 my-8">
                  PHOTOGRAPHY AND FINEARTS EVENTS
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {events.documents
                    .filter(
                      (item) =>
                        item.organizingCouncil ===
                        "PHOTOGRAPHY AND FINE ARTS CLUB"
                    )
                    .map((event) => (
                      <Card key={event.$id} {...event} />
                    ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold sm:text-3xl text-voilet ml-2 my-8">
                  ANUBHUTI EVENTS
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {events.documents
                    .filter((item) => item.organizingCouncil === "ANUBHUTI")
                    .map((event) => (
                      <Card key={event.$id} {...event} />
                    ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold sm:text-3xl text-voilet ml-2 my-8">
                  LITERARY EVENTS
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {events.documents
                    .filter(
                      (item) => item.organizingCouncil === "LITERARY COUNCIL"
                    )
                    .map((event) => (
                      <Card key={event.$id} {...event} />
                    ))}
                </div>
              </div>
            </div>
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
      className="relative block group rounded-xl"
      href={`/events/${$id}`}
    >
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <Image
          className="absolute top-0 object-cover size-full start-0"
          src={eventPoster}
          width={512}
          height={512}
          alt={refinedName}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-white sm:text-3xl group-hover:text-voilet transition-all">
            {refinedName}
          </h3>
        </div>
      </div>
    </a>
  );
}
