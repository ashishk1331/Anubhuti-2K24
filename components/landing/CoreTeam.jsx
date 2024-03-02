import { team } from "@/data/team";

export const CoreTeam = () => {
  return (
    <div className="bg-[#101010]" id="CoreTeam">
      <div className="max-w-5xl px-4 py-4 mx-auto sm:px-6 lg:px-8 lg:py-8 ">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
          <p className="mt-5 mb-10 text-[#efc36a] font-bold text-7xl ">
            Our Convenors
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 p-2 mb-16 sm:grid-cols-2 lg:grid-cols-2 md:gap-12 md:p-0">
          {team.slice(0, 4).map((member, index) => (
            <div
              className="grid justify-center mx-auto sm:flex sm:items-center gap-y-3 gap-x-4 "
              key={index}
            >
              <img
                className="mx-auto rounded-full size-20"
                src={member.image.src}
                alt={member.name}
              />

              <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:h-full">
                <div>
                  <h3 className="font-medium text-gray-200 dark:text-gray-200">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs text-center text-gray-200 uppercase sm:text-start">
                    {member.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
