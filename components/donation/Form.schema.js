import * as Yup from "yup";

export const DonateSchema = Yup.object().shape({
	// first name rules
	firstName: Yup.string()
		.required("Required"),

	// second name rules
	secondName: Yup.string()
		.required("Required"),

	// phone number rules
	phoneNumber: Yup.string()
		.length(10, "phone number should be atleast 10 digits long")
		.required("Required"),

	// year of passing rules
	yearOfPassing: Yup.number()
		.positive()
		.integer()
		.required("Required"),

	// branch rules
	branch: Yup.string()
		.required("Required"),
});
