import React from "react";

export const EventCard = ({ eventData }) => {
  const { title, description, image } = eventData;
  return (
    <div
      className="h-auto w-[95%] mx-auto md:w-[350px] sm:w-[300px] cursor-pointer 
    transition-all duration-500 ease-in-out hover:scale-105 rounded-[15px] overflow-hidden"
    >
      <div className="relative">
        <img
          src={image}
          className="w-[350px] h-[350px] cursor-pointer tracking-[1px] "
        ></img>

        <p className="absolute top-[300px] rounded-t-md left-[15px] text-white uppercase text-xl">
          {title}
        </p>
      </div>

      <div className="bg-white relative h-[150px]">
        <p className="p-4 text-lg">
          {description.length > 100
            ? description.substr(0, 100) + "....."
            : description + "....."}
        </p>

        <div>
          <button className="absolute bottom-0 right-0 p-4 text-lg font-bold text-red-800">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
