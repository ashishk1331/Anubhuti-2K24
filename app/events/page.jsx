"use client";

// Components
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { events } from "@/data/events";

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
        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((event) => (
            <Card key={event.id} {...event} />
          ))}
        </div>
        {/* End Grid */}
      </div>
      <Footer />
    </>
  );
}

function Card(props) {
  const { eventName, summary, id, image } = props;

  let refinedName = eventName;
  if (refinedName.indexOf("(") > -1) {
    refinedName = refinedName.substr(0, refinedName.indexOf("("));
  }

  return (
    <a
      className="relative block group rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href={`/events/${id}`}
    >
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img
          className="absolute top-0 object-cover size-full start-0"
          src={image.src}
          alt="Image Description"
        />
      </div>
      {/* Avatar Starts */}
      {/* <div className="absolute inset-x-0 top-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="size-[46px] border-2 border-white rounded-full"
                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
            </div>
            <div className="ms-2.5 sm:ms-4">
              <h4 className="font-semibold text-white">Gloria</h4>
              <p className="text-xs text-white/[.8]">May 30, 2021</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* Avatar Ends */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
            {refinedName}
          </h3>
          <p className="mt-2 text-white/[.8]">{summary}</p>
        </div>
      </div>
    </a>
  );
}
