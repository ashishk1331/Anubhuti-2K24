import { events } from "@/data/landing-event";
import Image from "next/image";

export default function ({ eventsData }) {
  return (
    <div
      id="events"
      className="w-full px-4 py-10 mx-auto bg-[#101010] sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="flex flex-col items-center max-w-2xl gap-4 mx-auto mb-10 text-center text-white lg:mb-14">
        <div className="flex flex-col items-center gap-4 my-8 text-center sm:my-16 xl:my-28">
          <p>Moments Captured</p>
          <h1 className="my-4 text-6xl font-black uppercase xl:text-8xl text-voilet">
            events
          </h1>
          <p>
            Get ready to be swept away by the excitement of our event-filled
            extravaganza.
            <br />
            From exhilarating contests to captivating workshops, our schedule
            promises a whirlwind of entertainment, learning, and fun.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-3">
        {events.slice(0, 6).map((event) => (
          <Card key={event.id} {...event} />
        ))}
      </div>

      <div className="mx-auto mt-16 w-fit">
        <a
          href="/events"
          className="p-4 px-8 m-4 text-xl font-medium text-black rounded-full bg-voilet"
        >
          Check all events
        </a>
      </div>
    </div>
  );
}

function Card(props) {
  const { id, name, image } = props;

  return (
    <div className="relative block bg-gray-900 cursor-pointer group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
      <div className="flex-shrink-0 relative  overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <Image
          className="absolute top-0 object-cover transition-all duration-500 aspect-square size-full sm:grayscale group-hover:grayscale-0 start-0"
          src={image}
          alt={name}
          width={500}
          placeholder="blur"
        />
      </div>
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          {/* Avatar */}
          <div className="flex items-center">
            <div className="ms-2.5 sm:ms-4">
              <h3 className="text-lg font-semibold text-white sm:text-3xl">
                {name}
              </h3>
            </div>
          </div>
          {/* End Avatar */}
        </div>
      </div>
    </div>
  );
}
