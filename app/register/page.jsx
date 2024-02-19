"use client";

import Header from "@/components/ui/Header";
import Form from "@/components/register/Register.jsx";
import { useStore } from "@/store/useForm.store";
import Loader from "@/components/ui/Loader";
import { account } from "@/Appwrite/appwrite.config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
      <Header />
      <RegistrationStatus registered={registered} />
      {loggedInUser ? (
        <Form />
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
            href="/profile"
          >
            see registrations -{">"}
          </a>
        </div>
      )}
    </>
  );
}
