"use client";
import { account } from "@/Appwrite/appwrite.config";
import Header from "@/components/admin/ui/Header";
import Layout from "@/components/admin/ui/Layout";
import Loader from "@/components/ui/Loader";
import { useStore } from "@/store/useForm.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const loggedInUser = useStore((state) => state.loggedInUser);
  const setLoggedInUser = useStore((state) => state.setLoggedInUser);
  async function init() {
    try {
      const loggedIn = await account.get();
      if (!loggedIn) router.push("/login?redirect=admin");
      if (!loggedIn.labels.includes("admin")) router.push("/");
      setLoggedInUser(loggedIn);
    } catch (err) {
      setLoggedInUser(null);
      router.push("/login?redirect=admin");
    }
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <main className="w-full min-h-screen">
      {loggedInUser ? (
        <Layout>
          {children}
        </Layout>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 sm:flex-row">
          <Loader />
          <span>Fetching records...</span>
        </div>
      )}
    </main>
  );
}
