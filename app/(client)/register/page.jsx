"use client";

import Form from "@/components/register/Register.jsx";
import { useStore } from "@/store/useForm.store";
import Loader from "@/components/ui/Loader";
import { account } from "@/Appwrite/appwrite.config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import RegistrationGuide from "@/components/register/RegistrationGuide ";

export default function () {
  const router = useRouter();
  const registered = useStore((state) => state.registered);

  const loggedInUser = useStore((state) => state.loggedInUser);
  async function init() {
    try {
      const loggedIn = await account.get();
      if (!loggedIn) router.push("/login?redirect=register");
    } catch (err) {
      router.push("/login?redirect=register");
    }
  }
  useEffect(() => {
    init();
  }, [loggedInUser]);
  return (
    <>
      <RegistrationStatus registered={registered} />

      {loggedInUser ? (
        <>
          <div className="max-w-4xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
            <div className="p-4 bg-white shadow rounded-xl sm:p-7 dark:bg-slate-900 text-center">
              <p className="me-2 inline-block">
                Registrations have been closed.
              </p>
            </div>
          </div>
          {/*<Form />
            <RegistrationGuide />*/}
          <hr className="mt-8 bg-gray-500"></hr>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[40vh] gap-4 sm:flex-row">
          <Loader />
          <span>Loading</span>
        </div>
      )}
    </>
  );
}

function RegistrationStatus({ registered }) {
  return (
    <>
      {registered && (
        <div className="flex flex-col w-full mt-4 text-center">
          <span className="">You have alreday registerd for the event</span>
          <a
            className="text-blue-400 underline hover:text-blue-700"
            href="/events"
          >
            checkout events -{">"}
          </a>
        </div>
      )}
    </>
  );
}

const RegistrationCard = ({ data }) => {
  const registered = useStore((state) => state.registered);
  const registrations = useStore((state) => state.registrations);
  // const { name, gender, year, branch, pno, payemnet } = registrations[0];
  return (
    <>
      {registered && registrations && (
        <div className="max-w-xs p-4 mx-auto mt-10 text-sm bg-white border rounded-md shadow-sm">
          <h2 className="mb-2 text-base font-bold">{registrations.name}</h2>
          <p className="mb-2 text-gray-600">
            Gender: {registrations.gender}, Year: {registrations.year}
          </p>
          <p className="mb-2 text-gray-600">Branch: {registrations.branch}</p>
          <p className="mb-2 text-gray-600">
            Phone Number: {registrations.pno}
          </p>
          <p
            className={`${
              registrations.payment ? "text-green-500" : "text-red-500"
            } font-bold`}
          >
            Payment: {registrations.payment ? "Paid" : "Not Paid"}
          </p>
        </div>
      )}
    </>
  );
};
