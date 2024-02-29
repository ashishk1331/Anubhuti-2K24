import { useStore } from "@/store/useForm.store";
import { useEffect, useState } from "react";
import { getUserEventRegistrations } from "@/helper/appwrite-helpers";
import toast, { Toaster } from "react-hot-toast";

export default function () {
  const [data, setData] = useState([]);
  const { loggedInUser, registrations } = useStore();
  async function init() {
    setData(
      await getUserEventRegistrations(loggedInUser.$id, registrations.$id)
    );
  }
  useEffect(() => {
    if (loggedInUser && registrations) {
      init();
    }
  }, [loggedInUser, registrations]);
  return (
    <div className="max-w-4xl px-4 py-10 mx-auto text-gray-800 sm:px-6 lg:px-8 lg:py-14">
      <div className="p-4 bg-white shadow rounded-xl sm:p-7 dark:bg-slate-900">
        <h2 className="text-xl font-semibold">Registered events</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          You can manage your registered events here
        </p>
        {data.length > 0 ? (
          <div className="flex flex-col mt-4">
            <Card data={data} />
          </div>
        ) : (
          <div className="flex flex-col mt-4 text-sm text-gray-700">
            <span>You have not Registered for any event.</span>
            <a className="text-blue-600" href="/events">
              See events
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ data }) {
  return (
    <>
      <Toaster position="top-right" reverseOrder />
      <ul className="text-blue-600 list-disc ">
        {data.map((x) => {
          return (
            <li key={x.$id} className="flex justify-between w-[90%] ml-8">
              <a className="" href={`events/${x.$id}`}>
                {x.eventName}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
