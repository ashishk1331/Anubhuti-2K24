import { ArrowUpLeft } from "@phosphor-icons/react/dist/ssr";

export default function () {
  return (
    <>
      <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
        Dashboard
      </h1>
      <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
        This is a dashboard for admins. It is a protected route that only users
        with the admin label can access.
      </p>
      <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <a
          className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
          target="_blank"
        >
          <ArrowUpLeft size={20} />
          Revert back to Main Page
        </a>
      </div>
    </>
  );
}
