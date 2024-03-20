import {
  ThumbsUp,
  CaretRight,
  BookOpen,
  ArchiveBox,
} from "@phosphor-icons/react/dist/ssr";

export default function () {
  return (
    <>
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-8 mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
              Admin Dashboard
            </h2>
            <p className="mt-3 text-gray-800 dark:text-gray-400">
              The admin dashboard is a powerful tool that allows you to manage
              your events and view reports. It's easy to use and intuitive, so
              you can focus on what you do best.
            </p>
            <p className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500"
                href="#"
              >
                Contact Anurag or Ashish to learn more
                <CaretRight weight="bold" />
              </a>
            </p>
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <BookOpen size={24} />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Add or edit events
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  The admin panel allows you to add or remove events, as well as
                  a host of other features. It's easy to use and intuitive.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <ArchiveBox size={24} />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Download reports
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Download reports and see how your events are doing at any
                  given time. You can also export the data to a XLSX file.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <ThumbsUp size={24} />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Intuitive UI
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  The admin panel is designed to be intuitive and easy to use.
                  You don't need to be a developer to use it. It's that simple!
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
