import Image from "next/image";
import background from "/public/landing/crowd.jpg";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

export default function (props) {
	return (
		<div className="relative w-full min-h-screen bg-gray-900 flex justify-between text-white">
			<div className="absolute inset-0 w-full h-full overflow-hidden z-[2]">
				<Image
					src={background}
					layout="fill"
					objectFit="cover"
					alt="Header background"
				/>
			</div>

			<div className="m-auto z-[3] flex flex-col items-center text-center mix-blend-difference">
				<h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[12rem] font-black text-center pt-20 text-voilet hover:text-white transition-all duration-[1500ms]">
					ANUBHUTI '24
				</h1>
			</div>

			<div className="flex flex-col items-center gap-2 absolute bottom-0 left-1/2 z-[3]">
				<p className="text-white text-sm">Scroll down</p>
				<CaretDown size={32} className="text-white animate-bounce" />
			</div>
		</div>
	);
}
