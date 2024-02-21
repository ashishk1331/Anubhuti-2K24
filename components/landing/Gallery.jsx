// Libraries
import Image from "next/image";

// Helper
import imageOne from "/public/gallery/gallery1.png";
import imageTwo from "/public/gallery/gallery10.png";
import imageThree from "/public/gallery/gallery3.png";
import imageFour from "/public/gallery/gallery4.png";
import imageFive from "/public/gallery/gallery11.png";
import imageSix from "/public/gallery/gallery12.png";
import imageSeven from "/public/gallery/gallery15.png";
import imageEight from "/public/gallery/gallery8.png";
import imageNine from "/public/gallery/gallery9.png";

export default function (props) {
  const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    imageSeven,
    imageEight,
    imageNine,
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-around bg-[#101010] text-white p-4 sm:p-8">
      <div className="flex flex-col items-center gap-4 text-center my-8 sm:my-16 xl:my-28">
        <p>Moments Captured</p>
        <h1 className="text-6xl xl:text-8xl uppercase font-black text-voilet my-4">
          Gallery
        </h1>
        <p>
          Capture the essence of our college fest in our gallery. Browse through
          <br />
          snapshots of joy, creativity, and camaraderie that encapsulate the spirit of our event.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0 mt-8 sm:mt-16">
        {images.map((url, index) => (
          <Card url={url} key={index}/>
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  const { url } = props;
  return (
    <div className="relative w-full h-96 aspect-square bg-gray-800 overflow-hidden">
      <Image
        src={url}
        alt="gallery"
        layout="fill"
        objectFit="cover"
        className="xl:grayscale hover:grayscale-0 transition-all duration-900 z-0"
      />
    </div>
  );
}
