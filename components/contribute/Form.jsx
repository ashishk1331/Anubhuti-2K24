// Libraries
import { useFormik } from "formik";
import QRCode from "react-qr-code";
import { Info, Image, CheckCircle } from "@phosphor-icons/react";

// Components
import Separator from "@/components/ui/Separator.jsx";
import InputBox from "@/components/ui/InputBox.jsx";

// Helper
import { DonateSchema } from "./Form.schema.js";
import { ID, databases, storage } from "@/Appwrite/appwrite.config.js";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function (props) {
  const UPI_ID =
    "upi://pay?pa=anubh96906@barodampay&pn=ANUBHUTI &mc=&tn=Verified Merchant&am=&cu=INR&url=&mode=02&orgid=159012&mid=&msid=&mtid=&sign=MEQCICbTwCfifTlKt+tp9bwqgqjVPzySa54L6CCmjZeeoYpLAiBz7bAIao/tys/3gNhvFTsaIT9LeeaFhTFdrZ893p1tcw==";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
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
      yearOfPassing: "",
      branch: "",
      email: "",
    },
    validationSchema: DonateSchema,
    onSubmit: async function (values, actions) {
      setLoading(true);
      try {
        setError("");
        const promise = storage.createFile(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_BUCKETID,
          ID.unique(),
          file
        );
        promise.then(
          function (response) {
            console.log("Image Uploaded Successfully");
            const data = {
              name: [values.firstName, values.lastName].join(" "),
              email: values.email,
              branch: values.branch,
              year: values.yearOfPassing,
              imageId: response.$id,
            };
            const promise2 = databases.createDocument(
              process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
              process.env
                .NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_COLLECTIONID,
              ID.unique(),
              data
            );
            promise2.then(
              function (response) {
                setError("");
                actions.resetForm();
                setFile(null);
                toast.success("Submitted Successfully");
                setLoading(false);
              },
              function (error) {
                setError(error.message);
                console.log(error);
                toast.error("Error submitting form");
                setLoading(false);
              }
            );
          },
          function (error) {
            setError(error.message);
            setLoading(false);
            toast.error("Error submitting form");
            console.log("Error uploading Image", error);
          }
        );
      } catch (error) {
        setLoading(false);
        toast.error("Error submitting form");
        setError(error.message);
      }
    },
  });

  return (
    <>
      {/* Card Section */}
      <Toaster position="top-right" reverseOrder />
      <div
        id="contribute"
        className="w-full max-w-2xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14"
      >
        {/* Card */}
        <div className="p-4 bg-white shadow rounded-xl sm:p-7 dark:bg-slate-900">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-200">
              Step 1
            </h2>
            <p className="mt-5 text-gray-600 text-md dark:text-gray-400">
              Scan the QR code to make a Contribution
            </p>
          </div>

          <div className="flex flex-col items-center justify-around w-full">
            <QRCode value={UPI_ID} />
            <h1 className="mt-8 text-xl font-bold text-center">ANUBHUTI</h1>
            <p>
              vpa:{" "}
              <span className="font-medium text-voilet">
                anubh96906@barodampay
              </span>
            </p>
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
              </div>
            </div>
            {/* End Section */}
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
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

            <div className="flex justify-end mt-12 gap-x-2">
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex ${
                  loading ? "bg-blue-400" : "bg-voilet"
                } items-center px-3 py-2 text-sm tracking-wider text-white border border-transparent rounded-lg gap-x-2 bg-voilet hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none`}
              >
                {loading ? "Submitting" : "Submit"}
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
