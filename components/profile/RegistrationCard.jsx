import { useState } from "react";

export default function ({ registration }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="mb-2 border rounded-md shadow-sm">
      <button
        className={` text-gray-800  dark:text-gray-400 font-medium py-2.5 px-4 w-full text-left ${
          isExpanded
            ? "active border-t-2 border-l-2 border-r-2 rounded-t-md border-blue-500"
            : ""
        }`}
        type="button"
        onClick={handleToggle}
      >
        {registration.name}
      </button>
      {isExpanded && (
        <div className="p-2 text-sm ">
          <p className="font-medium">
            Registration Id:{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {registration.$id}
            </span>
          </p>
          <p className="font-medium">
            email:{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {registration.email}
            </span>
          </p>
          <p className="font-medium">
            pno:{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {registration.pno}
            </span>
          </p>
          <p className="font-medium">
            type:{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {registration.type}
            </span>
          </p>
          <p className="font-medium">
            event:{" "}
            <span className="text-sm text-gray-500">
              {JSON.stringify(registration.event)}
            </span>
          </p>

          {/* Add other registration details as needed */}
        </div>
      )}
    </div>
  );
}
