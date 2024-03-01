import * as Yup from "yup";

export const DonateSchema = Yup.object().shape({
  // first name rules
  firstName: Yup.string().required("Required"),

  // second name rules
  lastName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Please include a valid email address")
    .required("Required"),

  // year of passing rules
  yearOfPassing: Yup.number().positive().integer(),
  phoneNumber: Yup.string()
    .length(10, "phone number should be atleast 10 digits long")
    .required("Required"),
  // branch rules
  branch: Yup.string(),
});
