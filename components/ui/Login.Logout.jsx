"use client";
import { account } from "@/Appwrite/appwrite.config";
import { useStore } from "@/store/useForm.store";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function () {
  const setLoggedInUser = useStore((state) => state.setLoggedInUser);
  const loggedInUser = useStore((state) => state.loggedInUser);
  async function handleLogout() {
    try {
      const promise = await account.deleteSessions();
      setLoggedInUser(null);
    } catch (error) {
      toast.error("Error Logging Out");
    }
  }
  return loggedInUser ? (
    <button
      className="px-4 py-1 bg-gray-100 border rounded-md"
      onClick={handleLogout}
    >
      Log Out
    </button>
  ) : (
    <a className="px-4 py-1 text-white bg-red-500 rounded-md " href="/login">
      Log In
    </a>
  );
}
