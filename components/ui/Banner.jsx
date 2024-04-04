"use client";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function (props) {
	const [visible, setVisible] = useState(true);

	return (
		visible && (
			<div
				id="ab-full-width-with-dismiss-button-on-blue-bg"
				className="hs-removing:-translate-y-full bg-voilet"
			>
				<div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
					<div className="flex">
						{props.children}
						<div className="ps-3 ms-auto">
							<button
								type="button"
								className="inline-flex rounded-lg p-1.5 text-white/[.8] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
								onClick={() => setVisible(false)}
							>
								<span className="sr-only">Dismiss</span>
								<X weight="bold" size={18} />
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	);
}
