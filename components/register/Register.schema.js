import * as Yup from "yup";

export const RegisterFormSchema = Yup.object().shape({
  // gender rules
  gender: Yup.mixed().oneOf(["male", "female", "other"]).required("Required"),
  year: Yup.number().required().positive().integer().max(2028).min(1970),
  // phone number rules
  phoneNumber: Yup.string()
    .length(10, "phone number should be atleast 10 digits long")
    .required("Required"),
});
