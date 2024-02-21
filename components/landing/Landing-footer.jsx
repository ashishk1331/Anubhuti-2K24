export default function (props) {
  return (
    <footer className="relative w-full bg-voilet text-white">
      <div className="z-0 w-full px-4 overflow-hidden">
        <h2 className="font-sans font-black text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[11.6rem] xl:text-[16rem]">
          ANUBHUTI
        </h2>
      </div>
      <div className="absolute text-xs sm:text-sm z-10 w-full  sm:p-8 p-4 bg-[#101010] -bottom-6 sm:-bottom-10 md:-bottom-7 lg:-bottom-3 xl:bottom-4 min-h-[20px] sm:min-h-[40px] flex sm:flex-row flex-col sm:justify-between sm:items-center">
        <div>
          <a href="https://go-north.vercel.app/">
            Site by <span className="sm:hover:underline">Go North</span>
          </a>
        </div>
        <div className="">
          <p className="">©Anubhuti 2024</p>
        </div>
      </div>
    </footer>
  );
}
