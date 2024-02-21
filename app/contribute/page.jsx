"use client";

// Components
import Form from "@/components/contribute/Form";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function (props) {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4">
        {/* Hero */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 m-8">
          {/* Grid */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                Become a sponser of{" "}
                <span className="text-voilet">Anubhuti</span>
              </h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                Your small help can help keep the lights on in the party even
                after 2pm.
              </p>
              {/* Buttons */}
              <div className="grid w-full gap-3 mt-7 sm:inline-flex">
                <a
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white border border-transparent rounded-lg gap-x-2 bg-voilet hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#donateForm"
                >
                  Donate
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Contact team
                </a>
              </div>
              {/* End Buttons */}

              {/* End Review */}
            </div>
            {/* End Col */}
            <div className="relative ms-4">
              <img
                className="w-full rounded-md"
                // https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
                src="https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=800&q=80"
                alt="Image Description"
              />
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-100 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0" />
              {/* SVG*/}
              <div className="absolute bottom-0 start-0">
                <svg
                  className="w-2/3 h-auto text-white ms-auto dark:text-slate-900"
                  width={630}
                  height={451}
                  viewBox="0 0 630 451"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x={531}
                    y={352}
                    width={99}
                    height={99}
                    fill="currentColor"
                  />
                  <rect
                    x={140}
                    y={352}
                    width={106}
                    height={99}
                    fill="currentColor"
                  />
                  <rect
                    x={482}
                    y={402}
                    width={64}
                    height={49}
                    fill="currentColor"
                  />
                  <rect
                    x={433}
                    y={402}
                    width={63}
                    height={49}
                    fill="currentColor"
                  />
                  <rect
                    x={384}
                    y={352}
                    width={49}
                    height={50}
                    fill="currentColor"
                  />
                  <rect
                    x={531}
                    y={328}
                    width={50}
                    height={50}
                    fill="currentColor"
                  />
                  <rect
                    x={99}
                    y={303}
                    width={49}
                    height={58}
                    fill="currentColor"
                  />
                  <rect
                    x={99}
                    y={352}
                    width={49}
                    height={50}
                    fill="currentColor"
                  />
                  <rect
                    x={99}
                    y={392}
                    width={49}
                    height={59}
                    fill="currentColor"
                  />
                  <rect
                    x={44}
                    y={402}
                    width={66}
                    height={49}
                    fill="currentColor"
                  />
                  <rect
                    x={234}
                    y={402}
                    width={62}
                    height={49}
                    fill="currentColor"
                  />
                  <rect
                    x={334}
                    y={303}
                    width={50}
                    height={49}
                    fill="currentColor"
                  />
                  <rect x={581} width={49} height={49} fill="currentColor" />
                  <rect x={581} width={49} height={64} fill="currentColor" />
                  <rect
                    x={482}
                    y={123}
                    width={49}
                    height={49}
                    fill="currentColor"
                  />
                  <rect
                    x={507}
                    y={124}
                    width={49}
                    height={24}
                    fill="currentColor"
                  />
                  <rect
                    x={531}
                    y={49}
                    width={99}
                    height={99}
                    fill="currentColor"
                  />
                </svg>
              </div>
              {/* End SVG*/}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hero */}

        <Form />
      </main>
      <Footer />
    </>
  );
}
