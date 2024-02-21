import { events } from "@/data/events";

export default function (props) {
  return (
    <div id="events" className="w-full px-4 py-10 mx-auto bg-[#101010] sm:px-6 lg:px-8 lg:py-14">
      <div className="max-w-2xl mx-auto mb-10 text-center lg:mb-14 text-white flex flex-col items-center gap-4">

        <div className="flex flex-col items-center gap-4 text-center my-8 sm:my-16 xl:my-28">
          <p>Moments Captured</p>
          <h1 className="text-6xl xl:text-8xl uppercase font-black text-voilet my-4">
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

      <div className="w-fit mt-16 mx-auto">
        <a
          href="/events"
          className="p-4 px-8 text-xl rounded-full bg-voilet text-black font-medium m-4"
        >
          Check all events
        </a>
      </div>
    </div>
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
      className="relative block bg-gray-900 group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href={`/events/${id}`}
    >
      <div className="flex-shrink-0 relative  overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img
          className="absolute top-0 object-cover transition-all duration-500 aspect-square size-full sm:grayscale group-hover:grayscale-0 start-0"
          src={image.src}
          alt="Image Description"
        />
      </div>
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          {/* Avatar */}
          <div className="flex items-center">
            <div className="ms-2.5 sm:ms-4">
              <h3 className="text-lg font-semibold text-white sm:text-3xl group-hover:text-yellow-500">
                {refinedName}
              </h3>
            </div>
          </div>
          {/* End Avatar */}
        </div>
      </div>
    </a>
  );
}
