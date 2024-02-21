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
  const setRegistrationsData = useStore((state) => state.setRegistrationsData);
  async function init() {
    try {
      const loggedIn = await account.get();
      setLoggedInUser(loggedIn);
      if (loggedIn) {
        const promise = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_REGISTRATIONS_COLLECTIONID,
          [Query.equal("userId", loggedIn.$id)],
        );
        if (promise.total > 0) {
          setRegistration(true);
          setRegistrationsData(promise.documents);
        }
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
        <title>Anubhuti 2024</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n/* width */\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: linear-gradient(to bottom, #451952 , #2b124c , #000f1e); \n  border-radius: 21px;\n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #efc36a; \n}\n\n",
          }}
        />
      </head>
      <body className={inter.className + " bg-[#101010]"}>{children}</body>
    </html>
  );
}
