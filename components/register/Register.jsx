// Libraries
import { useFormik } from "formik";
import { useState, useEffect, useRef } from "react";

// Components
import Separator from "@/components/ui/Separator.jsx";
import InputBox from "@/components/ui/InputBox.jsx";

// Helper
import { RegisterFormSchema } from "./Register.schema.js";
import { useStore } from "@/store/useForm.store";
import { ID, account, databases, storage } from "@/Appwrite/appwrite.config.js";
import { useRouter } from "next/navigation";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { CheckCircle } from "@phosphor-icons/react";

export default function (props) {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const loggedInUser = useStore((state) => state.loggedInUser);
  const registered = useStore((state) => state.registered);
  const registrations = useStore((state) => state.registrations);
  const setRegistration = useStore((state) => state.setRegistration);
  const setRegistrationsData = useStore((state) => state.setRegistrationsData);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("maira@xyz.com");
  const [error, setError] = useState("");
  const resetButtonRef = useRef(null);
  const branches = [
    "Computer Science and Engineering",
    "Information Technology",
    "Electical Engineering",
    "Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "MCA",
  ];
  const [initialValues, setInitialValues] = useState({
    phoneNumber: "",
    gender: "",
    type: "",
    branch: branches[0],
    year: "",
  });
  const emailRegex = /^[a-zA-Z0-9._-]+@knit\.ac\.in$/;
  useEffect(() => {
    if (loggedInUser) {
      if (loggedInUser.name) {
        const [first, last] = loggedInUser.name.split(" ");
        setFirstName(first);
        setSecondName(last);
      }
      if (loggedInUser.email) {
        setEmail(loggedInUser.email);
      }
      if (registrations) {
        setInitialValues({
          gender: registrations.gender,
          phoneNumber: registrations.pno,
          year: registrations.year,
          branch: registrations.branch,
        });
      }
    }
  }, [loggedInUser, registrations]);
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterFormSchema,
    onSubmit: async function (values, actions) {
      try {
        setError("");
        var data = {
          userId: loggedInUser.$id,
          name: [firstName, secondName].join(" "),
          email,
          pno: values.phoneNumber,
          gender: values.gender,
          type: emailRegex.test(email) ? "knitian" : "other",
          payment: emailRegex.test(email) ? true : false,
          branch: values.branch.toString(),
          year: values.year,
        };
        if (values.type === "other") {
          if (file == null) {
            console.error("Screenshot of transaction required");
            return;
          } else {
            const temp = await storage.createFile(
              process.env
                .NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTTRANSACTIONS_BUCKETID,
              ID.unique(),
              file
            );
            data = { ...data, imageId: temp.$id };
          }
        }
        const promise = await databases.createDocument(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_REGISTRATIONS_COLLECTIONID,
          ID.unique(),
          data
        );
        setRegistration(true);
        setRegistrationsData(promise);
        if (resetButtonRef.current) {
          resetButtonRef.current.click();
        }
        actions.resetForm();
        toast.success("Registration Successfull");
      } catch (error) {
        setError(error.message);
        toast.error("Error Registering");
      }
    },
  });

  return (
    <>
      <Toaster position="top-right" reverseOrder />
      <div className="max-w-4xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
        <div className="p-4 bg-white shadow rounded-xl sm:p-7 dark:bg-slate-900">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-700 dark:text-gray-200">
              {registered ? "Already Registered" : "Register"}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Fill out the form to participate in events.
            </p>
          </div>
          <form id="registrationForm" onSubmit={handleSubmit}>
            <div className="grid gap-2 sm:grid-cols-12 sm:gap-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-full-name"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Full name
                </label>
              </div>
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    id="af-account-full-name"
                    type="text"
                    required
                    className="relative block w-full px-3 py-2 -mt-px text-sm border-gray-200 shadow-sm pe-11 -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    value={firstName}
                    readOnly={registered}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    required
                    readOnly={registered}
                    className="relative block w-full px-3 py-2 -mt-px text-sm border-gray-200 shadow-sm pe-11 -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-email"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Email
                </label>
              </div>
              <div className="sm:col-span-9">
                <input
                  id="af-account-email"
                  type="email"
                  className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pe-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  value={email}
                  readOnly
                />
              </div>
              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    htmlFor="af-account-phone"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Phone
                  </label>
                </div>
              </div>
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    readOnly={registered}
                    id="af-account-phone"
                    type="text"
                    name="phoneNumber"
                    className="relative block w-full px-3 py-2 -mt-px text-sm border-gray-200 shadow-sm pe-11 -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="xxx-xxx-xxxx"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-2 text-xs text-red-500" id="email-error">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-gender-checkbox"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Gender
                </label>
              </div>
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <label
                    htmlFor="af-account-gender-checkbox"
                    className="relative flex w-full px-3 py-2 -mt-px text-sm border border-gray-200 shadow-sm -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <input
                      type="radio"
                      name="gender"
                      readOnly={registered}
                      className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="af-account-gender-checkbox"
                      defaultChecked=""
                      value="male"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
                      Male
                    </span>
                  </label>
                  <label
                    htmlFor="af-account-gender-checkbox-female"
                    className="relative flex w-full px-3 py-2 -mt-px text-sm border border-gray-200 shadow-sm -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <input
                      type="radio"
                      name="gender"
                      readOnly={registered}
                      className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="af-account-gender-checkbox-female"
                      value="female"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
                      Female
                    </span>
                  </label>
                  <label
                    htmlFor="af-account-gender-checkbox-other"
                    className="relative flex w-full px-3 py-2 -mt-px text-sm border border-gray-200 shadow-sm -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <input
                      type="radio"
                      name="gender"
                      className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="af-account-gender-checkbox-other"
                      value="other"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
                      Other
                    </span>
                  </label>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="year"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Year of Passing
                </label>
              </div>
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    readOnly={registered}
                    id="af-account-year"
                    type="number"
                    name="year"
                    className="relative block w-full px-3 py-2 -mt-px text-sm border-gray-200 shadow-sm pe-11 -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="2025"
                    value={values.year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.year && (
                  <p className="mt-2 text-xs text-red-500" id="email-error">
                    {errors.year}
                  </p>
                )}
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="branch"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Branch
                </label>
              </div>
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <div>
                    <select
                      id="branch"
                      name="branch"
                      value={values.branch}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="text-sm font-normal text-gray-500 border border-gray-200 rounded-lg shadow-sm"
                    >
                      {branches.map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              {!emailRegex.test(email) && (
                <div className="mt-6 col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm leading-6 text-gray-800 text-gray-900"
                  >
                    Upload screenshot of the transaction
                  </label>
                  <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                    <div className="text-center">
                      <div className="flex justify-around mt-4 text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            onChange={(e) => setFile(e.target.files[0])}
                            id="file-upload"
                            name="file"
                            type="file"
                            className="sr-only"
                            required
                          />
                        </label>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                  {file && (
                    <span className="flex items-center gap-2 p-2 px-3 ps-0">
                      <CheckCircle
                        weight="fill"
                        size={18}
                        className="fill-voilet"
                      />
                      {file.name}
                    </span>
                  )}
                  {/* {!file && (
                <span className="flex items-center gap-2 p-2 px-3 ps-0">
                  <Info weight="fill" size={18} className="fill-red-500" />
                  error occured.
                </span>
              )} */}
                </div>
              )}
            </div>
            <div className="flex justify-end mt-5 gap-x-2">
              {!registered && (
                <>
                  <button
                    type="reset"
                    ref={resetButtonRef}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Proceed
                  </button>
                </>
              )}
            </div>
          </form>
          {error && (
            <div className="mt-4">
              <span className="text-red-600">{error}</span>
            </div>
          )}
        </div>
        {/* End Card */}
      </div>
      {/* End Card Section */}
    </>
  );
}
