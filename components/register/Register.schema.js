import * as Yup from "yup";

export const RegisterFormSchema = Yup.object().shape({
  // gender rules
  gender: Yup.mixed().oneOf(["male", "female", "other"]).required("Required"),
  type: Yup.mixed().oneOf(["knitian", "other"]).required("Required"),

  // phone number rules
  phoneNumber: Yup.string()
    .length(10, "phone number should be atleast 10 digits long")
    .required("Required"),
});
