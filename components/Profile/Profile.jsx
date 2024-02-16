// Libraries
import { useFormik } from "formik";

// Helper
import { useStore } from "@/store/useForm.store.js";
import { ProfileSchema } from "./ProfileForm.schema.js";

export default function () {
  const loggedInUser = useStore((state) => state.loggedInUser);
  const { name, email, labels } = loggedInUser;

  let [firstName, lastName] = name.split(" ");
  firstName = firstName || "Maria";
  lastName = lastName || "Boone";

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
      firstName: "Maria",
      lastName: "Boone",
      email,
      password: "",
      confirmPassWord: "",
    },
    validationSchema: ProfileSchema,
    onSubmit: async function (values, actions) {
      // implement

      console.log(values);
    },
  });

  return (
    <>
      <>
        {/* Card Section */}
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
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
              <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
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
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Maria"
                    />
                    <input
                      type="text"
                      name="lastName" 
                      value={values.lastName}
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
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
                    name="email"
                    value={values.email}
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
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
                    <input
                      id="af-account-password"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Enter new password"
                    />
                    <input
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
              <div className="mt-5 flex justify-end gap-x-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent bg-voilet text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
        {/* End Card Section */}
      </>
    </>
  );
}
