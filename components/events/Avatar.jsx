export default function ({ data }) {
  return (
    <div className="flex items-center justify-between mb-12">
      <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
        <div className="flex-shrink-0">
          <img
            className="p-0.5 border rounded-full size-12"
            src="/anubhuti_logo.png"
            alt="Image Description"
          />
        </div>
        <div className="grow">
          <div className="flex items-center justify-between gap-x-2">
            <div>
              {/* Tooltip */}
              <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                <div className="block cursor-pointer hs-tooltip-toggle sm:mb-1 text-start">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {data.organizingCouncil || "KNIT"}
                  </span>
                </div>
              </div>
              {/* End Tooltip */}
              <ul className="text-xs text-gray-500">
                <li className="relative inline-block pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                  {data.addedOn || "N/A"}
                </li>
                <li className="relative inline-block pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                  2 min read
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
