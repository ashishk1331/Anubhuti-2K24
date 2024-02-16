export default function (props) {
	let { value, handleChange, error, type, label, handleBlur, name } = props;

	return (
		<div>
			<label
				htmlFor="email"
				className="block text-sm mb-2"
			>
				{label}
			</label>
			<div className="relative">
				<input
					type={type}
					id={name || type}
					name={name || type}
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
					className="py-3 px-4 block w-full bg-dark-gray border-light-gray rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
					required=""
					aria-describedby="email-error"
				/>
				{error && (
					<div className="absolute inset-y-0 end-0 pointer-events-none pe-3">
						<svg
							className="h-5 w-5 text-red-500"
							width={16}
							height={16}
							fill="currentColor"
							viewBox="0 0 16 16"
							aria-hidden="true"
						>
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
						</svg>
					</div>
				)}
			</div>
			{error && (
				<p className="text-xs text-red-500 mt-2" id="email-error">
					{error}
				</p>
			)}
		</div>
	);
}
