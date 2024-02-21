"use client";

// Components
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Form from "@/components/events/EventForm.jsx";

// Helper
import events from "/public/events/events.json";

function getEventById(id) {
  return events.find((event) => event.id === id);
}

export default function ({ params: { id } }) {
  const data = getEventById(id);

  return (
    <>
      <Header />
      {/* Blog Article */}
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto marker:text-voilet">
        <div className="max-w-2xl">
          {/* Avatar Media */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="flex-shrink-0">
                <img
                  className="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
              </div>
              <div className="grow">
                <div className="flex justify-between items-center gap-x-2">
                  <div>
                    {/* Tooltip */}
                    <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          Leyla Ludic
                        </span>
                      </div>
                    </div>
                    {/* End Tooltip */}
                    <ul className="text-xs text-gray-500">
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                        Jan 18
                      </li>
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                        8 min read
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Avatar Media */}
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold md:text-4xl dark:text-white">
                {data.eventName}
              </h2>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                {data.description}
              </p>
            </div>

            <figure>
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500">
                A man and a woman looking at a cell phone.
              </figcaption>
            </figure>

            {data.rounds && (
              <>
                <h2 className="text-2xl font-semibold dark:text-white">
                  Rounds:
                </h2>
                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                  {data.rounds.map((round, index) => {
                    return (
                      <li key={index}>
                        <h3 className="text-lg font-semibold dark:text-white">
                          {round.name}
                        </h3>
                        <p className="text-gray-800 dark:text-gray-200">
                          {round.description}
                        </p>
                        <ul className="mt-2">
                          {round.rules.map((rule, index) => (
                            <li key={index} className="ps-2">
                              {rule}
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {data.rules && (
              <>
                <h2 className="text-2xl font-semibold dark:text-white">
                  Rules:
                </h2>
                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                  {data.rules.map((criterion, index) => (
                    <li key={index}>{criterion}</li>
                  ))}
                </ul>
              </>
            )}

            {data.judgingCriteria && (
              <>
                <h2 className="text-2xl font-semibold dark:text-white">
                  Judging Criteria:
                </h2>
                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                  {data.judgingCriteria.map((criterion, index) => (
                    <li key={index}>{criterion}</li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="text-2xl font-semibold dark:text-white">Details:</h2>
            <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
              {data.timeLimit && (
                <li className="ps-2">
                  Time Limit:{" "}
                  <span className="font-bold">{data.timeLimit}</span>
                </li>
              )}
              <li className="ps-2">
                Venue: <span className="font-bold">{data.venue}</span>
              </li>
            </ul>
          </div>
          {/* End Content */}
        </div>
      </div>
      <Form eventName={data.eventName} />
      {/* End Blog Article */}
      <Footer />
    </>
  );
}
