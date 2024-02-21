export default function ({ transactions, page, capacity }) {
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
      <h2 className="text-2xl text-gray-500">Transactions</h2>
      <table className="w-full my-4 text-sm bg-white border border-gray-300 ">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border-b text-start">Name</th>
            <th className="p-2 border-b text-start">Email</th>

            <th className="p-2 border-b text-start">Amount</th>
            <th className="p-2 border-b text-start">TransactionId</th>
            <th className="p-2 border-b text-start">Timestamp</th>
            <th className="p-2 border-b text-start">Verified</th>
          </tr>
        </thead>
        <tbody>
          {transactions.documents
            .slice(page * capacity - capacity, page * capacity)
            .map((item, index) => (
              <tr
                key={item.$id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="p-2 border-b text-start">{item.name}</td>
                <td className="p-2 border-b text-start">{item.email}</td>

                <td className="p-2 border-b text-start">{item.amount}</td>
                <td className="p-2 border-b text-start">
                  {item.transactionId}
                </td>
                <td className="p-2 border-b text-start">
                  {formatTimestamp(item.$createdAt)}
                </td>
                <td className="p-2 border-b text-start">
                  {item.verified === false ? "Not Verified" : "Verified"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
