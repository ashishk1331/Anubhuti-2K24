export default function ({ event }) {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold md:text-4xl dark:text-white">
        {event.eventName}
      </h2>
      <p className="text-base text-gray-600 dark:text-gray-200">
        {event.description}
      </p>
      <figure>
        <img
          className="object-cover w-full rounded-xl"
          src={event.eventPoster}
          alt="Image Description"
        />
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          {event.eventName}
        </figcaption>
      </figure>
    </div>
  );
}
