// Libraries
import { useFormik } from "formik";
// components
import Separator from "@/components/ui/Separator.jsx";
import InputBox from "@/components/ui/InputBox.jsx";


// Helper
import { SignupSchema } from "./SignUp.schema.js";
import { useStore } from "@/store/useForm.store.js";
import Wrapper from "./Wrapper.jsx";

export default function (props) {
	const redirectForm = useStore((state) => state.setForm);

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
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: SignupSchema,
		onSubmit: async function (values, actions) {
			let { email, password } = values;
			
			console.log(email, password);

			// to reset form
			// actions.resetForm();
		},
	});


	return (
		<Wrapper>
			<div className="text-center">
				<h1 className="block text-2xl font-bold">Sign up</h1>
				<p className="mt-2 text-sm">
					Already have a account?{" "}
					<a
						className="text-voilet decoration-2 hover:underline font-medium"
						href="#"
						onClick={(e) => redirectForm(1)}
					>
						Sign in here
					</a>
				</p>
			</div>
			<Separator />
			<form className="mt-4" onSubmit={handleSubmit}>
				<div className="grid gap-y-4">
					{/*Email Address Input*/}
					<InputBox
						type="email"
						value={values.email}
						handleChange={handleChange}
						handleBlur={handleBlur}
						error={errors.email}
						type="email"
						label="Email address"
					/>

					{/*Password Input*/}
					<InputBox
						type="password"
						label="Password"
						value={values.password}
						handleChange={handleChange}
						handleBlur={handleBlur}
						error={errors.password}
					/>

					{/*Confirm Password Input*/}
					<InputBox
						type="password"
						name="confirmPassword"
						label="Confirm password"
						value={values.confirmPassword}
						handleChange={handleChange}
						handleBlur={handleBlur}
						error={errors.confirmPassword}
					/>
					{/* Checkbox */}
					{/*<div className="flex items-center">
						<div className="flex">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="shrink-0 mt-0.5 bg-dark-gray border-2 border-light-gray rounded text-blue-600 pointer-events-none focus:ring-blue-500"
							/>
						</div>
						<div className="ms-3">
							<label htmlFor="remember-me" className="text-sm">
								I accept the{" "}
								<a
									className="text-voilet decoration-2 hover:underline font-medium"
									href="#"
								>
									Terms and Conditions
								</a>
							</label>
						</div>
					</div>*/}
					{/* End Checkbox */}
					<button
						type="submit"
						disabled={isSubmitting}
						className="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-voilet text-white disabled:opacity-50 disabled:pointer-events-none"
					>
						Submit
					</button>
				</div>
			</form>
		</Wrapper>
	);
}
