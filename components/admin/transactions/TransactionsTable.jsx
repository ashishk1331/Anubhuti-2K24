import { databases } from "@/Appwrite/appwrite.config";
import { downloadImage } from "@/helper/appwrite-helpers";
import { useStore } from "@/store/useForm.store";
import { useEffect, useState } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";

export default function ({ transactions, page, capacity }) {
  return (
    <div className="mt-8 overflow-x-auto ">
      <h2 className="text-2xl text-gray-500">Unverified Transactions</h2>

      <div className="flex flex-col gap-4 mt-8">
        {transactions.documents.map((item, index) => (
          <Card item={item} key={item.$id} />
        ))}
      </div>
    </div>
  );
}

function Card({ item }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

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
    <div className="p-4 bg-white border rounded-md shadow-sm">
      <div
        onClick={toggleCollapse}
        className="flex items-center justify-between cursor-pointer"
      >
        <h2 className="text-base font-normal">{item.name}</h2>
        <button
          onClick={toggleCollapse}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          {isCollapsed ? "Show Details" : "Hide Details"}
        </button>
      </div>

      {!isCollapsed && (
        <div className="py-6 mt-5 border-t border-gray-300">
          <div>
            <p className="mb-2 text-sm font-normal">
              <span className="font-[600]">Email:</span> {item.email}
            </p>
            <p className="mb-2 text-sm font-normal">
              <span className="font-[600]">Timestamp:</span>{" "}
              {formatTimestamp(item.$createdAt)}
            </p>
            {item.verified === true && (
              <div>
                <p className="mb-2 text-sm font-normal">
                  <span className="font-[600]">Amount:</span> {item.amount}
                </p>
                <p className="mb-2 text-sm font-normal">
                  <span className="font-[600]">transactionId:</span>{" "}
                  {item.transactionId}
                </p>
              </div>
            )}
            <img
              src={item.href}
              alt="Transaction Screenshot"
              className=" w-[300px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button
              className="p-2 mt-2 border rounded-md w-fit bg-gray-50 hover:bg-gray-200"
              onClick={() => downloadImage(item.imageId)}
            >
              Download Image
            </button>
            <Form item={item} />
          </div>
        </div>
      )}
    </div>
  );
}

const Form = ({ item }) => {
  const [verified, setVerified] = useState(item.verified);
  const loggedInUser = useStore((state) => state.loggedInUser);
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    try {
      setError("");
      e.preventDefault();
      setLoading(true);
      console.log(amount, transactionId, loggedInUser.$id);
      const response = await databases.updateDocument(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_COLLECTIONID,
        item.$id,
        {
          amount: amount,
          transactionId: transactionId,
          verified: true,
          verifiedBy: loggedInUser.email,
        }
      );
      setTransactionId("");
      setAmount("");
      toast.success("Verified");
      setVerified(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.success("Failed to Verify");
      setError(error.message);
      console.error("Error updating document:", error);
    }
  };

  return (
    <>
      {verified === false ? (
        <form onSubmit={handleSubmit} className="p-4 mt-4 mb-2 bg-white">
          <Toaster position="top-right" reverseOrder />
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="transactionId"
              className="block text-sm font-medium text-gray-700"
            >
              Transaction ID
            </label>
            <input
              type="text"
              id="transactionId"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className={`p-2 text-white ${
              loading ? "bg-blue-200" : "bg-blue-500"
            }  rounded-md hover:bg-blue-600 focus:outline-none`}
          >
            {loading ? "Verifying" : "Verify"}
          </button>
        </form>
      ) : (
        <span className="text-blue-500 underlines">
          Verified by {loggedInUser.email}
        </span>
      )}
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
};
