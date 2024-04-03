import { downloadImage } from "@/helper/appwrite-helpers";

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

            <th className="p-2 border-b text-start">PNo.</th>
            <th className="p-2 border-b text-start">Amount</th>
            <th className="p-2 border-b text-start">TransactionId</th>
            <th className="p-2 border-b text-start">Verified</th>
            <th className="p-2 border-b text-start">Reciept</th>
          </tr>
        </thead>
        <tbody>
          {transactions.documents.map((item, index) => (
            <tr
              key={item.$id}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="p-2 border-b text-start">{item.name}</td>
              <td className="p-2 border-b text-start">{item.email}</td>

              <td className="p-2 border-b text-start">{item.pno}</td>
              <td className="p-2 border-b text-start">{item.amount}</td>
              <td className="p-2 border-b text-start">{item.transactionId}</td>
              <td className="p-2 border-b text-start">
                {item.verified === false ? "Not Verified" : "Verified"}
              </td>
              <td
                onClick={() => downloadImage(item.imageId)}
                className="p-2 bg-blue-200 border-b cursor-pointer hover:bg-blue-500 text-start"
              >
                Download Reciept
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
