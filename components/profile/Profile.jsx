// Libraries
import { useFormik } from "formik";

// Helper
import { useStore } from "@/store/useForm.store.js";
import { ProfileSchema } from "./ProfileForm.schema.js";
import { account } from "@/Appwrite/appwrite.config.js";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function () {
  const loggedInUser = useStore((state) => state.loggedInUser);
  const [error, setError] = useState("");
  const { name, email, labels } = loggedInUser;
  let [firstName, lastName] = name.split(" ");
  firstName = firstName || "John";
  lastName = lastName || "";

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      oldPassword: "",
      newPassWord: "",
    },
    validationSchema: ProfileSchema,
    onSubmit: async function (values, actions) {
      try {
        setError("");
        const { oldPassword, newPassWord } = values;
        const fullName = [values.firstName, values.lastName].join(" ");
        if (values.name != fullName) {
          // update name
          const promise1 = await account.updateName(fullName);
          toast.success("Updated name");
        }
        if (oldPassword && newPassWord) {
          // update password
          const promise2 = await account.updatePassword(
            newPassWord,
            oldPassword
          );
          toast.success("Updated password");
          actions.resetForm();
        }
      } catch (error) {
        setError(error.message);
        toast.error("Failed to update details");
      }
    },
  });

  return (
    <>
      <>
        {/* Card Section */}
        <Toaster position="top-right" reverseOrder />
        <div className="max-w-4xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
          {/* Card */}
          <div className="p-4 bg-white shadow rounded-xl sm:p-7 dark:bg-slate-900">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Profile
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Manage your name, password and account settings.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
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
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="relative block w-full px-3 py-2 -mt-px text-sm border-gray-200 shadow-sm pe-11 -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Maria"
                    />

                    <input
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="relative block w-full px-3 py-2 -mt-px text-sm border-gray-200 shadow-sm pe-11 -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Boone"
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
                    readOnly
                    value={loggedInUser.email}
                    className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pe-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="maria@site.com"
                  />
                </div>
                {/* End Col */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-password"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Password
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="space-y-2">
                    <div>
                      <input
                        id="af-account-password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="oldPassword"
                        type="text"
                        className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pe-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Old password"
                      />
                      {errors.oldPassword && (
                        <p
                          className="mt-2 text-xs text-red-500"
                          id="email-error"
                        >
                          {errors.oldPassword}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="password"
                        name="newPassWord"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newPassWord}
                        className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pe-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="New password"
                      />
                      {errors.newPassWord && (
                        <p
                          className="mt-2 text-xs text-red-500"
                          id="email-error"
                        >
                          {errors.newPassWord}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
              <div className="flex justify-end mt-5 gap-x-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-3 py-2 text-sm text-white border border-transparent rounded-lg gap-x-2 bg-voilet hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Save changes
                </button>
              </div>
            </form>
            {error && (
              <div className="w-full">
                <span className="text-sm text-red-500">{error}</span>
              </div>
            )}
          </div>
          {/* End Card */}
        </div>
        {/* End Card Section */}
      </>
    </>
  );
}
