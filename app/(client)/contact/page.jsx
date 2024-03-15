import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { contactData } from "@/data/contactData";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {contactData.map((contact, index) => (
            <div className="text-center" key={index}>
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {contact.name}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Contact Number : {contact.mobNum}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
