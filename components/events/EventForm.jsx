// Libraries
import { useFormik } from "formik";

// Components
import Separator from "@/components/ui/Separator.jsx";
import InputBox from "@/components/ui/InputBox.jsx";

// Helper
import { EventFormSchema } from "./EventForm.schema.js";
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "@/store/useForm.store.js";
import { ID, databases } from "@/Appwrite/appwrite.config.js";
import { useEffect, useState } from "react";
import { getEventRegistrations } from "@/helper/appwrite-helpers.js";

export default function ({ event }) {
  const { registered, registrations, loggedInUser } = useStore();
  const { $id, eventName } = event;
  const [showRegistration, setShowRegistration] = useState(true);
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      allow: false,
    },
    validationSchema: EventFormSchema,
    onSubmit: async function (values, actions) {
      // console.log(registrations);
      // return;
      const { allow } = values;
      if (allow == false) toast.error("check to register for event");
      else {
        try {
          const promise = await databases.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
            process.env
              .NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTREGISTRATIONS_COLLECTIONID,
            ID.unique(),
            {
              userId: loggedInUser.$id,
              registrationId: registrations.$id,
              eventId: $id,
              eventName: eventName,
              name: registrations.name,
              type: registrations.type,
              pno: registrations.pno,
              email: registrations.email,
            }
          );
          setShowRegistration(false);
          toast.success("Registration successfull...");
        } catch (error) {
          console.log(error);
          toast.error("Error registering");
        }
      }
    },
  });
  async function init() {
    if (loggedInUser && registrations) {
      const data = await getEventRegistrations(
        loggedInUser.$id,
        registrations.$id,
        $id
      );
      if (data.total > 0) setShowRegistration(false);
    }
  }
  useEffect(() => {
    init();
  }, [event, loggedInUser, registrations]);

  return (
    <>
      <Toaster position="top-right" reverseOrder />
      <div
        id="donateForm"
        className="w-full max-w-2xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14"
      >
        <div className="p-4 bg-white shadow rounded-xl sm:p-7 dark:bg-slate-900">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-200">
              Register
            </h2>
            <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
              Fill out the form to register for
              <span className="ml-2 text-black underline">{eventName}</span>
            </p>
          </div>
          <Separator />
          {!showRegistration ? (
            <div
              onClick={() => toast.success("Already registered")}
              className="px-2 py-2 text-sm text-gray-600 border rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 w-fit"
            >
              Already Registered
            </div>
          ) : (
            <>
              {" "}
              {!registered ? (
                <div className="py-8 border-gray-200 first:pt-0 last:pb-0 first:border-transparent dark:border-gray-700 dark:first:border-transparent">
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Fill out the registration form to register for this event
                  </p>
                  <div className="flex justify-end mt-4 gap-x-2">
                    <a
                      href="/register"
                      className="inline-flex items-center px-3 py-2 text-sm tracking-wider text-white border border-transparent rounded-lg gap-x-2 bg-voilet hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Register
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="py-8 border-t border-gray-200 first:pt-0 last:pb-0 first:border-transparent dark:border-gray-700 dark:first:border-transparent">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Submit application
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      If you are ready to participate please click the checkbox
                      below.
                    </p>
                    <div className="flex mt-5">
                      <input
                        type="checkbox"
                        name="allow"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.allow}
                        className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="af-submit-application-privacy-check"
                      />
                      <label
                        htmlFor="af-submit-application-privacy-check"
                        className="text-sm text-gray-500 ms-2 dark:text-gray-400"
                      >
                        Allow us to process your personal information.
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end mt-12 gap-x-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-3 py-2 text-sm tracking-wider text-white border border-transparent rounded-lg gap-x-2 bg-voilet hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Register
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
