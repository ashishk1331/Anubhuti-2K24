import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

import { contactData } from "@/data/contactData";
import React from "react";

const page = () => {
  return (
    <>
      {/*<div>
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
      </div>*/}
      <div className="w-full flex">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-24">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  {/* Header */}
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        Contact List
                      </h2>
                      <p className="text-sm text-gray-600">
                        In case of confusion or emergency, contact the following
                        people.
                      </p>
                    </div>
                  </div>

                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Availability
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Name
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start w-full">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Phone Number
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-end" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {contactData.map((contact, index) => (
                        <tr key={index}>
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <CheckCircle weight="fill" size={18} className="fill-green-500" />
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-600">
                                {contact.name}
                              </span>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-600">
                                {contact.mobNum}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
