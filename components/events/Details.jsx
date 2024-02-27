export default function ({ data }) {
  return (
    <>
      <h2 className="text-2xl font-semibold dark:text-white">Details:</h2>
      <ul className="space-y-3 text-base text-gray-600 list-disc list-outside ps-5 dark:text-gray-200">
        <li className="ps-2">
          Time Limit:
          <span className="ml-1 text-sm font-medium">
            {data.timeimit || "N/A"}{" "}
          </span>
        </li>
        <li className="ps-2">
          Venue:
          <span className="ml-1 text-sm font-medium">
            {data.venue || "KNIT Auditorium"}
          </span>
        </li>
      </ul>
    </>
  );
}
