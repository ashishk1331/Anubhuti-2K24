"use client";
import { account } from "@/Appwrite/appwrite.config";
import Header from "@/components/admin/ui/Header";
import Loader from "@/components/ui/Loader";
import { useStore } from "@/store/useForm.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const loggedInUser = useStore((state) => state.loggedInUser);
  const router = useRouter();
  async function init() {
    try {
      const loggedIn = await account.get();
      if (!loggedIn) router.push("/login?redirect=admin");
      if (!loggedIn.labels.includes("admin")) router.push("/");
    } catch (err) {
      router.push("/login?redirect=admin");
    }
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <main className="w-full min-h-screen">
      {loggedInUser ? (
        <div>
          <Header />
          {children}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 sm:flex-row">
          <Loader />
          <span>Fetching records...</span>
        </div>
      )}
    </main>
  );
}
