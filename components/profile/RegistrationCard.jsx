import { useFormik } from "formik";
import toast from "react-hot-toast";
import { RegisterFormSchema } from "../register/Register.schema";

export default function ({ registration }) {
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
      toast.error("Contact admin to update data");
      const data = {
        college: values.college,
        branch: values.branch,
        year: values.year,
        phoneNumber: values.phoneNumber,
      };
      console.log(values, data);
    },
  });
  return (
    <div className="overflow-hidden bg-white rounded-lg ">
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
          {/* End Col */}

          {/* End Col */}

          {/* End Col */}
          {/* End Col */}
          <div className="sm:col-span-3">
            <label
              htmlFor="af-account-type-checkbox"
              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
            >
              Type
            </label>
          </div>
          {/* End Col */}
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
          {/* End Col */}
          {/* End Col */}
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
