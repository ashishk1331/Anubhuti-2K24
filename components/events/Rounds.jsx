export default function ({ rounds }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold dark:text-white">Rounds:</h2>
      <ul className="mt-2 space-y-5 text-lg text-gray-800 list-disc list-outside ps-5 dark:text-gray-200">
        {rounds.map((round, index) => {
          return (
            <li key={index}>
              {Object.keys(round).map((key, index) => (
                <Display key={index} heading={key} value={round[key]} />
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Display({ heading, value }) {
  if (heading == "id") return;
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
