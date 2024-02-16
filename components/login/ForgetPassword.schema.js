import * as Yup from "yup";

export const ForgetPasswordSchema = Yup.object().shape({
	// email rules
	email: Yup.string()
		.email("Please include a valid email address")
		.required("Required")
});
