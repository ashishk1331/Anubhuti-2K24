import React from "react";

export const Gallery = () => {
  return (
    <>
      <div className="w-full h-24 bg-sky-500 bg-gradient-to-b from-[#000f1e] to-[#451952]" />
      <div
        className="w-100vw flex flex-col items-center justify-center max-h-full bg-gradient-to-b from-[#451952] to-[#2b124c] "
        id="Gallery"
      >
        <div className="w-5/6 flex flex-col items-center justify-center max-h-full mb-[4rem]">
          <div className="mt-[5rem] mb-[5rem]">
            <h1 className="text-7xl font-bold text-[#efc36a] ">Gallery</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="object-cover object-center h-auto max-w-full transition duration-500 rounded-lg hover:scale-105"
                  src="/gallery/gallery14.png"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="object-cover object-center h-auto max-w-full transition duration-500 rounded-lg hover:scale-105 "
                  src="/gallery/gallery5.png"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="object-cover object-center h-auto max-w-full transition duration-500 rounded-lg hover:scale-105"
                  src="/gallery/gallery13.png"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="object-cover object-center h-auto max-w-full transition duration-500 rounded-lg hover:scale-105"
                  src="/gallery/gallery7.png"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="object-center h-auto max-w-full transition duration-500 bg-cover rounded-lg hover:scale-105 "
                  src="/gallery/gallery3.png"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="object-cover object-center h-auto max-w-full transition duration-500 rounded-lg hover:scale-105 "
                  src="/gallery/gallery1.png"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="object-cover object-center h-auto max-w-full transition duration-500 rounded-lg hover:scale-105"
                  src="/gallery/gallery15.png"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="object-cover object-center h-auto max-w-full transition duration-500 rounded-lg hover:scale-105 "
                  src="/gallery/gallery4.png"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="object-cover object-center h-auto max-w-full transition duration-500 rounded-lg hover:scale-105"
                  src="/gallery/gallery8.png"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="object-cover object-center h-auto max-w-full transition duration-500 rounded-lg hover:scale-105"
                  src="/gallery/gallery9.png"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="object-cover object-center h-auto max-w-full transition duration-500 rounded-lg hover:scale-105"
                  src="/gallery/gallery10.png"
                  alt="gallery-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
