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
    <div className="flex flex-col justify-between w-full gap-1 sm:p-8 pt-10 p-4 text-xs sm:text-sm text-white sm:flex-row bg-[#101010]">
      <span>Total Views: {vistors}</span>
      <div className="flex flex-col">
        {/* <a href="https://go-north-ten.vercel.app/" target="blank">
          Site by <span className="sm:hover:underline">Go North</span>
        </a> */}
        <a
          className="text-xs hover:text-yellow-50"
          target="blank"
          href="https://logger-mocha-six.vercel.app/"
        >
          Metrics powered by Logger
        </a>
      </div>
    </div>
  );
}
