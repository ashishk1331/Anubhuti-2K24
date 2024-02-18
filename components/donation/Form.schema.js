import * as Yup from "yup";

export const DonateSchema = Yup.object().shape({
	// first name rules
	firstName: Yup.string()
		.required("Required"),

	// second name rules
	lastName: Yup.string()
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

	// amount rules
	amount: Yup.number()
	.min(100, "Please consider donating atleast 1000 Rs.")
	.required("Required"),

	// branch rules
	transactionID: Yup.string()
		.required("Required"),
});
