"use client";

// Libraries
import { AnimatePresence } from "framer-motion";

// Components
import Login from "@/components/login/LogIn.jsx";
import SignUp from "@/components/login/SignUp.jsx";
import ForgetPassword from "@/components/login/ForgetPassword.jsx";

// Helper
import { useStore } from "@/store/useForm.store.js";
import React, { useEffect } from "react";
import { account } from "@/Appwrite/appwrite.config";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const formNumber = useStore((state) => state.form);
  async function init() {
    try {
      if (await account.get()) router.push("/");
    } catch (err) {}
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <main className="w-full max-w-md p-6 mx-auto mb-24">
      <div className="border shadow-sm mt-7 bg-background border-light-gray rounded-xl">
        <div className="p-4 sm:p-7">
          <AnimatePresence>
            <React.Suspense fallback={<div>Loading...</div>}>
              {correctForm(formNumber)}
            </React.Suspense>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

function correctForm(formNumber) {
  /**
   * which form to choose:
   * 0 -> forget password
   * 1 -> login form
   * 2 -> signup form
   */
  switch (formNumber) {
    case 0:
      return <ForgetPassword />;
    case 2:
      return <SignUp />;
    default:
      return <Login />;
  }
}
