"use client";
import { useEffect, useState } from "react";

export default function () {
  const [vistors, setVisitors] = useState(0);
  async function init() {
    const body = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        clientSecret: "e2893680-e64c-492b-bf4b-816343cc4c83",
        applicationId: "146f59cc-f6f6-4d2e-942c-2d6aa7cc2228",
      }),
    };
    const res = await fetch(
      "https://logger-mocha-six.vercel.app/api/logger/v1",
      body
    );
    const json = await res.json();
    if (res.status === 200) {
      setVisitors(json);
    } else {
      console.log(json);
      setVisitors(0);
    }
  }
  useEffect(() => {
    console.log("Logger");
    init();
  }, []);
  return (
    <div className="flex flex-col justify-between w-full gap-1 p-4 mt-5 text-sm text-white lg:mt-1 sm:flex-row bg-gray-950">
      <span>Total Visitors: {vistors}</span>
      <a
        className="underline hover:text-yellow-300"
        target="blank"
        href="https://logger-mocha-six.vercel.app/"
      >
        Metrics powered by Logger
      </a>
    </div>
  );
}
