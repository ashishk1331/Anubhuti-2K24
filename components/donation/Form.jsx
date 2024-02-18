// Libraries
import { useFormik } from "formik";
import QRCode from "react-qr-code";

// Components
import Separator from "@/components/ui/Separator.jsx";
import InputBox from "@/components/ui/InputBox.jsx";

// Helper
import { DonateSchema } from "./Form.schema.js";
import { ID, databases } from "@/Appwrite/appwrite.config.js";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function (props) {
  const [error, setError] = useState("");
  const UPI_ID = "90876543@okicici";
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
      firstName: "",
      lastName: "",
      phoneNumber: "",
      yearOfPassing: "",
      branch: "",
      amount: 0,
      transactionID: "",
      email: "",
    },
    validationSchema: DonateSchema,
    onSubmit: async function (values, actions) {
      try {
        setError("");
        const data = {
          name: [values.firstName, values.lastName].join(" "),
          pno: values.phoneNumber,
          email: values.email,
          amount: values.amount,
          branch: values.branch,
          transactionId: values.transactionID,
          year: values.yearOfPassing,
        };
        const promise = await databases.createDocument(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_COLLECTIONID,
          ID.unique(),
          data
        );
        toast.success("Transaction Submitted Successfully");
        actions.resetForm();
      } catch (error) {
        setError(error.message);
      }
    },
  });

  return (
    <>
      {/* Card Section */}
      <Toaster position="top-right" reverseOrder />
      <div
        id="donateForm"
        className="w-full max-w-2xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14"
      >
        {/* Card */}
        <div className="p-4 bg-white shadow rounded-xl sm:p-7 dark:bg-slate-900">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-200">
              Step 1
            </h2>
            <p className="mt-5 text-gray-600 text-md dark:text-gray-400">
              Scan the QR code to make a donation
            </p>
          </div>

          <div className="flex justify-around w-full">
            <QRCode value={UPI_ID} />
          </div>
          <Separator marginY={5} />
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-200">
              Step 2
            </h2>
            <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
              Fill out the form with your transaction details.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Section */}
            <div className="py-6 border-t border-gray-200 first:pt-0 last:pb-0 first:border-transparent dark:border-gray-700 dark:first:border-transparent">
              <div className="mt-2 space-y-3">
                <InputBox
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.firstName}
                  label="First Name"
                  placeholder="Maria"
                />
                <InputBox
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.lastName}
                  label="Last Name"
                  placeholder="Boone"
                />
                <InputBox
                  type="email"
                  name="email"
                  value={values.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.email}
                  label="Email"
                  placeholder="mariaboone@gmail.com"
                />
                <InputBox
                  type="text"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.phoneNumber}
                  label="Phone Number"
                  placeholder="05362240454"
                />
              </div>
            </div>
            {/* End Section */}
            {/* Section */}
            <div className="py-6 border-t border-gray-200 first:pt-0 last:pb-0 first:border-transparent dark:border-gray-700 dark:first:border-transparent">
              <div className="mt-2 space-y-3">
                <InputBox
                  type="text"
                  name="yearOfPassing"
                  value={values.yearOfPassing}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.yearOfPassing}
                  label="Year of Passing"
                  placeholder="2021"
                />
                <InputBox
                  type="text"
                  name="branch"
                  value={values.branch}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.branch}
                  label="Branch"
                  placeholder="Computer Science and Engineering"
                />
                <InputBox
                  type="number"
                  name="amount"
                  value={values.amount}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.amount}
                  label="Amount"
                />
                <InputBox
                  type="text"
                  name="transactionID"
                  value={values.transactionID}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.transactionID}
                  label="Transaction ID"
                  placeholder="txn_1234567890"
                />
              </div>
            </div>
            {/* End Section */}
            <div className="flex justify-end mt-12 gap-x-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-3 py-2 text-sm tracking-wider text-white border border-transparent rounded-lg gap-x-2 bg-voilet hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Proceed
              </button>
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
