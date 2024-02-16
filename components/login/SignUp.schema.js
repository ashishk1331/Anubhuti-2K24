import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
	// email rules
	email: Yup.string()
		.email("Please include a valid email address")
		.required("Required"),

	// password rules
	password: Yup.string()
		.min(8, "8+ characters required")
		.required("Required"),

	// confirm password
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "passwords don't match")
		.required("Required"),
});
