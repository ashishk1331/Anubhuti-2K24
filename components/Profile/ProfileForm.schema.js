import * as Yup from "yup";

export const ProfileSchema = Yup.object().shape({
  // first name rules
  firstName: Yup.string().required("Required"),

  // last name rules
  lastName: Yup.string().required("Required"),

  // email rules
  //   email: Yup.string().email("Please include a valid email address"),

  // password rules
  oldPassword: Yup.string().min(8, "8+ characters required"),

  // confirm password
  newPassWord: Yup.string().min(8, "8+ characters required"),
});
