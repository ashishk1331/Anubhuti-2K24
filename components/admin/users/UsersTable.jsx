export default function ({ users, page, capacity }) {
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
  return (
    <div className="mt-8 overflow-x-auto ">
      <h2 className="text-2xl text-gray-500">Users</h2>
      <table className="w-full my-4 text-sm bg-white border border-gray-300 ">
        <thead>
          <tr className="bg-gray-100 ">
            <th className="p-2 border-b text-start">Name</th>
            <th className="p-2 border-b text-start">Email</th>
            <th className="p-2 border-b text-start">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.users
            .slice(page * capacity - capacity, page * capacity)
            .map((item, index) => (
              <tr
                key={item.$id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="p-2 border-b">{item.name}</td>
                <td className="p-2 border-b">{item.email}</td>
                <td className="p-2 border-b">
                  {formatTimestamp(item.$createdAt)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
