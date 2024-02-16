// Libraries
import { useFormik } from "formik";

// Components
import Separator from "@/components/ui/Separator.jsx";
import InputBox from "@/components/ui/InputBox.jsx";

// Helper
import { DonateSchema } from "./Form.schema.js";

export default function (props) {
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
			firstName: "",
			lastName: "",
			phoneNumber: "",
			yearOfPassing: "",
			branch: "",
		},
		validationSchema: DonateSchema,
		onSubmit: async function (values, actions) {
			console.log(values);

			// to reset form
			// actions.resetForm();
		},
	});

	return (
		<>
			{/* Card Section */}
			<div id="donateForm" className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				{/* Card */}
				<div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
							Donation
						</h2>
						<p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
							Have a smile on your face, knowing that you are
							making a difference
						</p>
					</div>
					<Separator />
					<form onSubmit={handleSubmit}>
						{/* Section */}
						<div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
							<div className="mt-2 space-y-3">
								<InputBox
									type="text"
									name="firstName"
									value={values.firstName}
									handleChange={handleChange}
									handleBlur={handleBlur}
									error={errors.firstName}
									label="First Name"
								/>
								<InputBox
									type="text"
									name="lastName"
									value={values.lastName}
									handleChange={handleChange}
									handleBlur={handleBlur}
									error={errors.lastName}
									label="Last Name"
								/>
								<InputBox
									type="text"
									name="phoneNumber"
									value={values.phoneNumber}
									handleChange={handleChange}
									handleBlur={handleBlur}
									error={errors.phoneNumber}
									label="Phone Number"
								/>
							</div>
						</div>
						{/* End Section */}
						{/* Section */}
						<div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
							<div className="mt-2 space-y-3">
								<InputBox
									type="text"
									name="yearOfPassing"
									value={values.yearOfPassing}
									handleChange={handleChange}
									handleBlur={handleBlur}
									error={errors.yearOfPassing}
									label="Year of Passing"
								/>
								<InputBox
									type="text"
									name="branch"
									value={values.branch}
									handleChange={handleChange}
									handleBlur={handleBlur}
									error={errors.branch}
									label="Branch"
								/>
							</div>
						</div>
						{/* End Section */}
						<div className="mt-12 flex justify-end gap-x-2">
							<button
								type="submit"
								disabled={isSubmitting}
								className="tracking-wider py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent bg-voilet text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
