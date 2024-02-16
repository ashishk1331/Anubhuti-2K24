"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useStore } from "@/store/useForm.store";
import { account } from "@/Appwrite/appwrite.config";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const setLoggedInUser = useStore((state) => state.setLoggedInUser);
  async function init() {
    try {
      const loggedIn = await account.get();
      setLoggedInUser(loggedIn);
    } catch (err) {
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
