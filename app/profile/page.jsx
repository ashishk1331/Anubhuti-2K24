"use client";
import { useStore } from "@/store/useForm.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { account } from "@/Appwrite/appwrite.config";
import Profile from "@/components/Profile/Profile";
import Wrapper from "@/components/login/Wrapper";
import Loader from "@/components/ui/Loader";

export default function () {
  const router = useRouter();
  const loggedInUser = useStore((state) => state.loggedInUser);
  useEffect(() => {
    (async function () {
      if (!(await account.get())) router.push("/");
    })();
  }, []);
  return (
    <main className="w-full min-h-screen p-4">
      {loggedInUser ? (
        <Wrapper>
          <Profile />
        </Wrapper>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 sm:flex-row">
          <Loader />
          <span>Fetching records...</span>
        </div>
      )}
    </main>
  );
}
