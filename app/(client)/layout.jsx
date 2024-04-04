"use client";
import { useStore } from "@/store/useForm.store";
import { ID, account, databases } from "@/Appwrite/appwrite.config";
import { useEffect } from "react";
import { Query } from "appwrite";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Banner from "@/components/ui/Banner";
import { status } from "@/data/config";

export default function RootLayout({ children }) {
  const setLoggedInUser = useStore((state) => state.setLoggedInUser);
  const setRegistration = useStore((state) => state.setRegistration);
  const setRegistrationsData = useStore((state) => state.setRegistrationsData);
  const setEventRegistrationsData = useStore(
    (state) => state.setEventRegistrationsData
  );
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
        if (promise.total > 0) {
          setRegistration(true);
          setRegistrationsData(promise.documents[0]);
          // setEventRegistrationsData(await getEventRegistrations());
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
    <>
      {!status && (
        <Banner>
          <p className="inline-block text-white me-2">
            Registrations have been closed.
          </p>
        </Banner>
      )}

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
