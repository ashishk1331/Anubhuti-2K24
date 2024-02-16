// Libraries
import { useFormik } from "formik";

// components
import Separator from "@/components/ui/Separator.jsx";
import InputBox from "@/components/ui/InputBox.jsx";

// Helper
import { ForgetPasswordSchema } from "./ForgetPassword.schema.js";
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
		},
		validationSchema: ForgetPasswordSchema,
		onSubmit: async function (values, actions) {
			let { email } = values;

			console.log(values);
			// reset the form
			// actions.resetForm();
		},
	});

	return (
		<Wrapper>
			<div className="text-center">
				<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
					Forget Password
				</h1>
				<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
					Remember your password?{" "}
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
