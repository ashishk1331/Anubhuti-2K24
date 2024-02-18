// Libraries
import { useFormik } from "formik";
import { useState, useEffect } from "react";

// Components
import Separator from "@/components/ui/Separator.jsx";
import InputBox from "@/components/ui/InputBox.jsx";

// Helper
import { RegisterFormSchema } from "./Register.schema.js";
import { useStore } from "@/store/useForm.store";

export default function (props) {
	const loggedInUser = useStore((state) => state.loggedInUser);

	const [firstName, setFirstName] = useState("Maria");
	const [secondName, setSecondName] = useState("Boone");
	const [email, setEmail] = useState("maira@xyz.com");

	useEffect(() => {
		if (loggedInUser) {
			if (loggedInUser.name) {
				const [first, last] = loggedInUser.name.split(" ");
				setFirstName(first);
				setSecondName(last);
			}
			if (loggedInUser.email) {
				setEmail(loggedInUser.email);
			}
		}
	}, [loggedInUser]);

	const {
		values,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit,
		isSubmitting,
	} = useFormik({
		initialValues: {
			phoneNumber: "",
			gender: "",
			event: [],
		},
		validationSchema: RegisterFormSchema,
		onSubmit: async function (values, actions) {
			console.log(values);

			// to reset form
			// actions.resetForm();
		},
	});

	return (
		<>
			{/* Card Section */}
			<div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				{/* Card */}
				<div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
					<div className="mb-8">
						<h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
							Register
						</h2>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Fill out the form to participate in events.
						</p>
					</div>
					<form onSubmit={handleSubmit}>
						{/* Grid */}
						<div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
							<div className="sm:col-span-3">
								<label
									htmlFor="af-account-full-name"
									className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
								>
									Full name
								</label>
							</div>
							{/* End Col */}
							<div className="sm:col-span-9">
								<div className="sm:flex">
									<input
										id="af-account-full-name"
										type="text"
										className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
										value={firstName}
										readOnly
									/>
									<input
										type="text"
										className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
										value={secondName}
										readOnly
									/>
								</div>
							</div>
							{/* End Col */}
							<div className="sm:col-span-3">
								<label
									htmlFor="af-account-email"
									className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
								>
									Email
								</label>
							</div>
							{/* End Col */}
							<div className="sm:col-span-9">
								<input
									id="af-account-email"
									type="email"
									className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
									value={email}
									readOnly
								/>
							</div>
							{/* End Col */}
							<div className="sm:col-span-3">
								<div className="inline-block">
									<label
										htmlFor="af-account-phone"
										className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
									>
										Phone
									</label>
								</div>
							</div>
							{/* End Col */}
							<div className="sm:col-span-9">
								<div className="sm:flex">
									<input
										id="af-account-phone"
										type="text"
										name="phoneNumber"
										className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
										placeholder="xxx-xxx-xxxx"
										value={values.phoneNumber}
										onChange={handleChange}
										onBlue={handleBlur}
									/>
								</div>
							</div>
							{/* End Col */}
							<div className="sm:col-span-3">
								<label
									htmlFor="af-account-gender-checkbox"
									className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
								>
									Gender
								</label>
							</div>
							{/* End Col */}
							<div className="sm:col-span-9">
								<div className="sm:flex">
									<label
										htmlFor="af-account-gender-checkbox"
										className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
									>
										<input
											type="radio"
											name="gender"
											className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
											id="af-account-gender-checkbox"
											defaultChecked=""
											value="male"
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
											Male
										</span>
									</label>
									<label
										htmlFor="af-account-gender-checkbox-female"
										className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
									>
										<input
											type="radio"
											name="gender"
											className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
											id="af-account-gender-checkbox-female"
											value="female"
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
											Female
										</span>
									</label>
									<label
										htmlFor="af-account-gender-checkbox-other"
										className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
									>
										<input
											type="radio"
											name="gender"
											className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
											id="af-account-gender-checkbox-other"
											value="other"
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
											Other
										</span>
									</label>
								</div>
							</div>
							{/* End Col */}
							<div className="sm:col-span-3">
								<label
									htmlFor="af-account-full-name"
									className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
								>
									Events
								</label>
							</div>
							{/* End Col */}
							<div className="sm:col-span-9">
								<div className="sm:flex w-full">
									<ul className="max-w-sm flex flex-col w-full">
										<li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
											<div className="relative flex items-start w-full">
												<div className="flex items-center h-5">
													<input
														id="hs-list-group-item-checkbox-1"
														name="event"
														type="checkbox"
														className="border-gray-200 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
														defaultChecked=""
														value="dance"
														onChange={handleChange}
														onBlur={handleBlur}
													/>
												</div>
												<label
													htmlFor="hs-list-group-item-checkbox-1"
													className="ms-3.5 block w-full text-sm text-gray-600 dark:text-gray-500"
												>
													Dance
												</label>
											</div>
										</li>
										<li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
											<div className="relative flex items-start w-full">
												<div className="flex items-center h-5">
													<input
														id="hs-list-group-item-checkbox-2"
														name="event"
														type="checkbox"
														className="border-gray-200 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
														value="sing"
														onChange={handleChange}
														onBlur={handleBlur}
													/>
												</div>
												<label
													htmlFor="hs-list-group-item-checkbox-2"
													className="ms-3.5 block w-full text-sm text-gray-600 dark:text-gray-500"
												>
													Sing
												</label>
											</div>
										</li>
										<li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
											<div className="relative flex items-start w-full">
												<div className="flex items-center h-5">
													<input
														id="hs-list-group-item-checkbox-3"
														name="event"
														type="checkbox"
														className="border-gray-200 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
														value="dj"
														onChange={handleChange}
														onBlur={handleBlur}
													/>
												</div>
												<label
													htmlFor="hs-list-group-item-checkbox-3"
													className="ms-3.5 block w-full text-sm text-gray-600 dark:text-gray-500"
												>
													DJ
												</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* End Grid */}
						<div className="mt-5 flex justify-end gap-x-2">
							<button
								type="reset"
								className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							>
								Reset
							</button>
							<button
								type="submit"
								disabled={isSubmitting}
								className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							>
								Proceed
							</button>
						</div>
					</form>
				</div>
				{/* End Card */}
			</div>
			{/* End Card Section */}
		</>
	);
}
