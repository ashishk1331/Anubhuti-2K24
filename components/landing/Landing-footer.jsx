import background from "/public/landing/crowd3.jpg";
import foreground from "/public/landing/anubhuti-footer.svg";

export default function (props) {
  return (
    <>
      <footer
        className="relative flex flex-col items-center w-full text-white bg-cover"
        style={{
          backgroundImage: `url(${background.src})`,
        }}
      >
        <div className="z-0 w-full mx-auto overflow-hidden mix-blend-difference">
          <img src={foreground.src} className="w-full object-cover opacity-90" />
        </div>
      </footer>
      <div className="text-xs sm:text-sm z-10 w-full  sm:p-8 p-4 bg-[#101010] text-white flex sm:flex-row flex-col sm:justify-between sm:items-center">
        <a href="https://go-north-ten.vercel.app/" target="blank">
          Site by <span className="underline">Go North</span>
        </a>
        <p className="">©Anubhuti 2024</p>
      </div>
    </>
  );
}
