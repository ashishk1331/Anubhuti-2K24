export default function (props) {
	const { marginY } = props;
	return (
		<div
			style={{
				marginTop: marginY + "em",
				marginBottom: marginY + "em",
			}}
			className="my-3 py-3 flex items-center text-xs text-gray-400 uppercase after:flex-[1_1_0%] after:border-t after:border-light-gray"
		/>
	);
}
