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
    <div
      id="gallery"
      className="w-full min-h-screen flex flex-col justify-around bg-[#101010] text-white p-4 sm:p-8"
    >
      <div className="flex flex-col items-center gap-4 my-8 text-center sm:my-16 xl:my-28">
        <p>Moments Captured</p>
        <h1 className="my-4 text-6xl font-black uppercase xl:text-8xl text-voilet">
          Gallery
        </h1>
        <p>
          Capture the essence of our college fest in our gallery. Browse through
          <br />
          snapshots of joy, creativity, and camaraderie that encapsulate the
          spirit of our event.
        </p>
      </div>

      <div className="grid sm:w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-3">
        {images.map((url, index) => (
          <Card url={url} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  const { url, index } = props;
  return (
    <div className="relative w-full overflow-hidden bg-gray-800 h-96 aspect-square">
      <Image
        src={url}
        alt={"gallery " + index}
        placeholder="blur"
        className="z-0 transition-all xl:grayscale xl:hover:grayscale-0 duration-500 h-full object-cover"
        width={500}
      />
    </div>
  );
}
