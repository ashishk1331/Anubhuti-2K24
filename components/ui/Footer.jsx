export default function (props) {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="text-center">
        <div>
          <a
            className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
            aria-label="Brand"
          >
            Anubhuti
          </a>
        </div>
        {/* End Col */}
        <div className="mt-3">
          <p className="text-gray-500">
            We are students of{" "}
            <a
              className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-500 dark:hover:text-indigo-400"
              href="https://knit.ac.in/"
            >
              KNIT.
            </a>
          </p>
          <p className="text-gray-500">
            Anubhuti 2024. A site by{" "}
            <a
              href="https://go-north.vercel.app/"
              className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-500 dark:hover:text-indigo-400"
            >
              Go North.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
