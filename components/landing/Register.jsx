export default function(props){
	return (
		<div className="w-full min-h-screen bg-[#101010] text-white flex">
			<div className="flex flex-col items-center gap-4 w-[70%] text-center m-auto">
				<span>Get your passes now</span>
				<h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl lg:leading-tight uppercase">
					register for <span className="text-voilet">anubhuti</span> events and show your talent
				</h1>
				<a href="/register" className="p-2 px-6 rounded-full bg-voilet text-black font-medium mt-12">Save your spot</a>
			</div>
		</div>
	)
}