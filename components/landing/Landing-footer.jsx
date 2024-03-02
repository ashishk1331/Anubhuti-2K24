import background from "/public/landing/flowers.jpg";

export default function (props) {
  return (
    <footer
      className="relative flex flex-col items-center w-full text-white"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="z-0 w-full px-4 mx-auto overflow-hidden mix-blend-difference">
        <h2 className="font-sans font-black text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[11.6rem] xl:text-[14rem] ">
          ANUBHUTI
        </h2>
      </div>
      <div className="absolute text-xs sm:text-sm z-10 w-full  sm:p-8 p-4 bg-[#101010] -bottom-6 sm:-bottom-10 md:-bottom-7 lg:-bottom-3 min-h-[20px] sm:min-h-[30%] flex sm:flex-row flex-col sm:justify-between sm:items-center">
        <div className="flex items-center gap-1">
          <img
            src="/ptsc.jpeg"
            alt="Club Logo"
            className="h-8 mr-2 rounded-full"
          />
          <p className="text-sm font-bold">Prog and TechSkill Club</p>
        </div>
        <p className="">©Anubhuti 2024</p>
      </div>
    </footer>
  );
}
