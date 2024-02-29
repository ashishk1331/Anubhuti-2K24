export default function (props) {
  return (
    <div
      id="register"
      className="w-full min-h-screen bg-[#101010] text-white flex"
    >
      <div className="flex flex-col items-center gap-4 w-[90%] sm:w-[70%] text-center m-auto">
        <span>Get your passes now</span>
        <h1 className="text-4xl font-bold uppercase sm:text-5xl lg:text-7xl lg:leading-tight">
          register for <span className="text-voilet">anubhuti</span> events and
          show your talent
        </h1>
        <a
          href="/register"
          className="p-4 px-8 mt-12 text-xl font-medium text-black rounded-full bg-voilet"
        >
          Save your spot
        </a>
      </div>
    </div>
  );
}
