import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

export default function Loader(props) {
	return (
		<div className="w-full min-h-28">
			<CircleNotch weight="fill" size={24} className="animate-spin fill-voilet" />
		</div>
	);
}
