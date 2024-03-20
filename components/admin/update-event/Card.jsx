"use client";

import Image from "next/image";

export default function (props) {
	let { events } = props;

	return (
		<>
			{/* Card Blog */}
			<div className="max-w-[85rem] mx-auto">
				{/* Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{events.map((event, index) => (
						<div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
							<div className="h-52 flex flex-col justify-center items-center bg-gray-200 rounded-t-xl overflow-hidden group">
								<Image
									className="w-full object-fit group-hover:scale-125 transition-all duration-[800ms] ease-in-out"
									src={event.eventPoster}
									alt={"Poster for " + event.eventName}
									width={512}
									height={512}
								/>
							</div>
							<div className="p-4 md:p-6">
								<span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
									{event.organizingCouncil}
								</span>
								<h3 className="text-xl font-semibold text-gray-800  ">
									{event.eventName}
								</h3>
								<p className="mt-3 text-gray-500">
									{event.description.substring(0, 80)}...
								</p>
							</div>
							<div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200  ">
								<a
									className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none       "
									href={`/events/${event.$id}`}
								>
									View
								</a>
								<a
									className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none       "
									href={`/admin/update-event/${event.$id}`}
								>
									Edit
								</a>
							</div>
						</div>
					))}
				</div>
				{/* End Grid */}
			</div>
			{/* End Card Blog */}
		</>
	);
}
