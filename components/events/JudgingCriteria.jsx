export default function ({ criteria }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold dark:text-white">
        Judging Criteria:
      </h2>
      <ul className="mt-2 space-y-3 text-base text-gray-600 list-disc list-outside ps-5 dark:text-gray-200">
        {criteria.map((criterion, index) => (
          <li key={index}>{criterion}</li>
        ))}
      </ul>
    </div>
  );
}
