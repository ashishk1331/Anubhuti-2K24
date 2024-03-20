import { useFormik } from "formik";
import { RegisterFormSchema } from "../register/Register.schema";
import { useState } from "react";
import { Info, Image, CheckCircle } from "@phosphor-icons/react";
import { ID, databases, storage } from "@/Appwrite/appwrite.config.js";
import toast, { Toaster } from "react-hot-toast";

export default function ({ registration }) {
  const emailRegex = /^[a-zA-Z0-9._-]+@knit\.ac\.in$/;
  // console.log(registration);

  const [file, setFile] = useState(null);
  const branches = [
    "Computer Science and Engineering",
    "Information Technology",
    "Electical Engineering",
    "Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "MCA",
  ];
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    validationSchema: RegisterFormSchema,
    initialValues: {
      phoneNumber: registration.pno,
      gender: registration.gender,
      type: registration.type,
      branch: registration.branch,
      year: registration.year,
      college: registration.college,
    },
    // validationSchema: RegisterFormSchema,
    onSubmit: async function (values, actions) {
      let data = {
        college: values.college,
        branch: values.branch,
        year: values.year,
        pno: values.phoneNumber,
      };

      try {
        if (file != null) {
          const temp = await storage.createFile(
            process.env
              .NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTTRANSACTIONS_BUCKETID,
            ID.unique(),
            file
          );
          data = { ...data, imageId: temp.$id };
          console.log("Image Data", data);
        }

        const response = await databases.updateDocument(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_REGISTRATIONS_COLLECTIONID,
          registration.$id,
          data
        );

        toast.success("Event updated successfully");
      } catch (err) {
        console.log(err);
        toast.error("Error updating event");
      }
    },
  });
  return (
    <div className="overflow-hidden bg-white rounded-lg ">
      <Toaster position="top-right" reverseOrder />
      <form id="registrationForm" onSubmit={handleSubmit}>
        {/* Grid */}
        <div className="grid gap-2 sm:grid-cols-12 sm:gap-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="af-account-full-name"
              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
            >
              Full name
            </label>
          </div>
          {/* End Col */}
          <div className="sm:col-span-9">
            <div className="sm:flex">
              <input
                id="af-account-full-name"
                type="text"
                required
                className="relative block w-full px-3 py-2 -mt-px text-sm border-gray-200 shadow-sm pe-11 -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                value={registration.name}
                readOnly={true}
              />
            </div>
          </div>
          {/* End Col */}
          <div className="sm:col-span-3">
            <label
              htmlFor="af-account-email"
              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
            >
              Email
            </label>
          </div>
          {/* End Col */}
          <div className="sm:col-span-9">
            <input
              id="af-account-email"
              type="email"
              className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pe-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              value={registration.email}
              readOnly
            />
          </div>
          {/* End Col */}
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
          {/* End Col */}
          <div className="sm:col-span-9">
            <div className="sm:flex">
              <input
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
              htmlFor="af-account-type-checkbox"
              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
            >
              Type
            </label>
          </div>

          <div className="sm:col-span-9">
            <div className="sm:flex">
              <div>
                <select
                  id="type"
                  name="type"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="text-sm font-normal text-gray-700 border border-gray-200 rounded-lg shadow-sm"
                >
                  <option value="knitian">knitian</option>
                  <option value="knitian">Others</option>
                </select>
              </div>
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
              htmlFor="year"
              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
            >
              College
            </label>
          </div>
          <div className="sm:col-span-9">
            <div className="sm:flex">
              <input
                required={true}
                id="af-collge"
                type="string"
                name="college"
                className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-lg shadow-sm pe-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Kamla Nehru Institute of Technology"
                value={values.college}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.college && (
              <p className="mt-2 text-xs text-red-500" id="email-error">
                {errors.college}
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
                  className="text-sm font-normal text-gray-700 border border-gray-200 rounded-lg shadow-sm"
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

          {emailRegex.test(registration.email) == false &&
            registration.imageId === null && (
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="inline-block text-sm text-gray-800 mt-2.5"
                >
                  Upload screenshot of the transaction
                </label>
                <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                  <div className="text-center">
                    <Image
                      className="w-12 h-12 mx-auto text-gray-300"
                      aria-hidden="true"
                    />
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
                          accept="image/png, image/jpeg, image/jpg"
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
        {/* End Grid */}
        <div className="flex justify-end mt-5 gap-x-2">
          <button
            type="submit"
            className="inline-flex items-center px-3 py-2 text-sm text-white border border-transparent rounded-lg gap-x-2 bg-voilet hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            update
          </button>
        </div>
      </form>
    </div>
  );
}
