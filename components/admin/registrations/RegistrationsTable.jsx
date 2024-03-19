import exportToExcel from "@/helper/excelHelper";

export default function ({ registrations, page, capacity }) {
  const formatTimestamp = (timestamp) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    return new Date(timestamp).toLocaleString("en-US", options);
  };
  function downloadData() {
    exportToExcel(registrations.documents, "registrations");
  }
  return (
    <div className="mt-8 overflow-x-auto ">
      <h2 className="text-2xl text-gray-500">Registrations</h2>
      {/* <div className="p-2 my-4 ">
        <button onClick={downloadData} className="p-2 border rounded-md">
          Download
        </button>
      </div> */}
      <table className="w-full my-4 text-sm bg-white border border-gray-300 ">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border-b">Name</th>
            <th className="p-2 border-b">Email</th>
            <th className="p-2 border-b">Type</th>
            <th className="p-2 border-b">College</th>
            <th className="p-2 border-b">Year</th>
            <th className="p-2 border-b">pno</th>
            <th className="p-2 border-b">Gender</th>
          </tr>
        </thead>
        <tbody>
          {registrations.documents.map((item, index) => (
            <tr
              key={item.$id}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="p-2 border-b text-start">{item.name}</td>
              <td className="p-2 border-b text-start">{item.email}</td>
              <td className="p-2 border-b text-start">{item.type}</td>
              <td className="p-2 border-b text-start">
                {item.college || "KNIT"}
              </td>
              <td className="p-2 border-b text-start">{item.year}</td>
              <td className="p-2 border-b text-start">{item.pno}</td>
              <td className="p-2 border-b text-start">{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
