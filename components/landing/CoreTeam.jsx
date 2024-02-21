import React from "react";

export const CoreTeam = () => {
  return (
    <div className="bg-[#000f1e]" id="CoreTeam">
      <div className="w-full h-24 bg-sky-500 bg-gradient-to-b from-[#2b124c] to-[#000f1e]" />
      <div className="max-w-5xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14 ">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
          <p className="mt-10 mb-10 text-[#efc36a] font-bold text-7xl ">
            Our Team
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-12"></div>
      </div>
    </div>
  );
};
