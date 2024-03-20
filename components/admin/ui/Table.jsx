export default function (props) {
	const { title, events, columns } = props;

	return (
		<>
			{/* Table Section */}
			<div className="max-w-[85rem] mx-auto">
				{/* Card */}
				<div className="flex flex-col">
					<div className="-m-1.5 overflow-x-auto">
						<div className="p-1.5 min-w-full inline-block align-middle">
							<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
								{/* Header */}
								<div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
									<h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
										{title}
									</h2>
								</div>
								{/* End Header */}
								{/* Table */}
								{events ? (
									<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
										<thead className="bg-gray-50 dark:bg-slate-900">
											<tr>
												<th
													scope="col"
													className="px-6 py-3 text-start"
												>
													<div className="flex items-center gap-x-2">
														<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
															Id
														</span>
													</div>
												</th>
												{columns.map(
													(column, index) => (
														<th
															key={index}
															scope="col"
															className="px-6 py-3 text-start"
														>
															<div className="flex items-center gap-x-2">
																<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
																	{
																		column.header
																	}
																</span>
															</div>
														</th>
													),
												)}
												<th
													scope="col"
													className="px-6 py-3 text-end"
												/>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
											{events.map((event, index) => (
												<tr key={event["$id"]}>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<span className="text-sm text-gray-600 dark:text-gray-400">
																{index + 1}
															</span>
														</div>
													</td>
													{columns.map(
														(column, index) => (
															<td
																key={index}
																className="size-px whitespace-nowrap"
															>
																<div className="px-6 py-3">
																	<span className="text-sm text-gray-600 dark:text-gray-400">
																		{
																			event[
																				column
																					.key
																			]
																		}
																	</span>
																</div>
															</td>
														),
													)}
												</tr>
											))}
										</tbody>
									</table>
								) : (
									<Loader />
								)}
								{/* End Table */}
								{/* Footer */}
								<div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
									<div>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											<span className="font-semibold text-gray-800 dark:text-gray-200">
												{events.length}
											</span>{" "}
											results
										</p>
									</div>
								</div>
								{/* End Footer */}
							</div>
						</div>
					</div>
				</div>
				{/* End Card */}
			</div>
			{/* End Table Section */}
		</>
	);
}
