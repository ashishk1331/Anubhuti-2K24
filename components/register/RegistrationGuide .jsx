import QRCode from "react-qr-code";
import { Info, Image, CheckCircle } from "@phosphor-icons/react";
export default function () {
  const UPI_ID =
    "upi://pay?pa=anubh96906@barodampay&pn=ANUBHUTI &mc=&tn=Verified Merchant&am=&cu=INR&url=&mode=02&orgid=159012&mid=&msid=&mtid=&sign=MEQCICbTwCfifTlKt+tp9bwqgqjVPzySa54L6CCmjZeeoYpLAiBz7bAIao/tys/3gNhvFTsaIT9LeeaFhTFdrZ893p1tcw==";
  return (
    <div className="mx-auto">
      <div className="mt-8 mb-4 text-center">
        <h1 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-200">
          Registration guide for outsiders
        </h1>
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-200">
          Step 1
        </h2>
        <p className="mt-5 text-gray-600 text-md dark:text-gray-400">
          Scan the QR code to submit fees
        </p>
        <p className="mt-1 text-gray-600 text-md dark:text-gray-400">
          For Outsiders Fees is Rs.1000
        </p>
      </div>
      <div className="flex flex-col items-center justify-around w-full">
        <QRCode value={UPI_ID} />
        <h1 className="mt-8 text-xl font-bold text-center">ANUBHUTI</h1>
        <p>
          vpa:{" "}
          <span className="font-medium text-voilet">anubh96906@barodampay</span>
        </p>
      </div>{" "}
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-200">
          Step 2
        </h2>
        <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
          Fill out the form with your transaction details.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          We will verify your transaction detail.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          You can see status of your registration in your profile.
        </p>
      </div>
    </div>
  );
}
