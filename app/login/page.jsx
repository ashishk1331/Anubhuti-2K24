"use client";

// Libraries
import { AnimatePresence } from "framer-motion";

// Components
import Login from "@/components/login/LogIn.jsx";
import SignUp from "@/components/login/SignUp.jsx";
import ForgetPassword from "@/components/login/ForgetPassword.jsx";

// Helper
import { useStore } from "@/store/useForm.store.js";

export default function Home() {
  const formNumber = useStore((state) => state.form);

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-background border border-light-gray border-gray-200 rounded-xl shadow-sm">
        <div className="p-4 sm:p-7">
          <AnimatePresence>
            {correctForm(formNumber)}
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
