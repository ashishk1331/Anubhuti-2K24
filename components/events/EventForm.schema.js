import * as Yup from "yup";

export const EventFormSchema = Yup.object().shape({
  // allow rules
  allow: Yup.boolean().required("Required"),
});
