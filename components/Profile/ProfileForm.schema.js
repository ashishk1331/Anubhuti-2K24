import * as Yup from "yup";

export const ProfileSchema = Yup.object().shape({
	// first name rules
	firstName: Yup.string(),

	// last name rules
	lastName: Yup.string(),

	// email rules
	email: Yup.string()
		.email("Please include a valid email address"),

	// password rules
	password: Yup.string()
		.min(8, "8+ characters required"),

	// confirm password
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "passwords don't match"),
});
