"use client";
import { account } from "@/Appwrite/appwrite.config";
import { useStore } from "@/store/useForm.store";
import { useEffect } from "react";

export default function ({ children }) {
  const setLoggedInUser = useStore((state) => state.setLoggedInUser);
  async function init() {
    try {
      const loggedIn = await account.get();
      setLoggedInUser(loggedIn);
      console.log(loggedIn);
    } catch (err) {
      setLoggedInUser(null);
    }
  }
  useEffect(() => {
    init();
  }, []);
  return <>{children}</>;
}
