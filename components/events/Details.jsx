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
      {data.details && (
        <ul className="space-y-3 text-base text-gray-600 list-disc list-outside ps-5 dark:text-gray-200">
          {Object.keys(data.details).map((key, index) => (
            <li key={index} className="ps-2">
              {key}:
              <span className="ml-1 text-sm font-medium">
                {data.details[key] || "N?A"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function Display({ heading, value }) {
  if (heading == "name")
    return (
      <span className="text-lg font-medium underline first-letter:capitalize">
        {value} :
      </span>
    );

  if (typeof value == "object")
    return (
      <div className="flex flex-col">
        <span className="text-base font-medium text-gray-600 first-letter:capitalize">
          {heading} :
        </span>
        <ul className="ml-10 text-gray-600 list-disc">
          {Object.keys(value).map((key, index) => (
            <li key={index} className="text-base">
              {value[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  return (
    <div className="flex gap-1 text-base">
      <span className="font-medium text-gray-600 first-letter:capitalize">
        {heading}:{" "}
      </span>
      <p className="text-gray-600 whitespace-pre-wrap">{value}</p>
    </div>
  );
}
