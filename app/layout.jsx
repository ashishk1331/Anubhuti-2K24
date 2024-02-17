"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useStore } from "@/store/useForm.store";
import { ID, account, databases } from "@/Appwrite/appwrite.config";
import { useEffect } from "react";
import { Query } from "appwrite";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const setLoggedInUser = useStore((state) => state.setLoggedInUser);
  const setRegistration = useStore((state) => state.setRegistration);
  async function init() {
    try {
      const loggedIn = await account.get();
      setLoggedInUser(loggedIn);
      if (loggedIn) {
        const promise = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_REGISTRATIONS_COLLECTIONID,
          [Query.equal("userId", loggedIn.$id)]
        );
        if (promise.total > 0) setRegistration(true);
      }
    } catch (err) {
      console.log(err);
      setLoggedInUser(null);
    }
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Anubhuti-2k24</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
