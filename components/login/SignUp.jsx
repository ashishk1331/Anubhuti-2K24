// Libraries
import { useFormik } from "formik";
// components
import Separator from "@/components/ui/Separator.jsx";
import InputBox from "@/components/ui/InputBox.jsx";

// Helper
import { SignupSchema } from "./SignUp.schema.js";
import { useStore } from "@/store/useForm.store.js";
import Wrapper from "./Wrapper.jsx";
import { useState } from "react";
import { ID, account } from "@/Appwrite/appwrite.config.js";
import { useRouter } from "next/navigation.js";

export default function (props) {
  const router = useRouter();
  const [error, setError] = useState("");
  const redirectForm = useStore((state) => state.setForm);
  const loggedInUser = useStore((state) => state.loggedInUser);
  const setLoggedInUser = useStore((state) => state.setLoggedInUser);
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async function (values, actions) {
      try {
        setError("");
        let { email, password, confirmPassword } = values;
        const promise = await account.create(ID.unique(), email, password);
        const user = await account.createEmailSession(email, password);
        setLoggedInUser(user);
        actions.resetForm();
        setSubmitting(false);
        router.push("/profile");
      } catch (error) {
        setError(error.message);
      }
    },
  });

  return (
    <Wrapper>
      <div className="text-center">
        <h1 className="block text-2xl font-bold">Sign up</h1>
        <p className="mt-2 text-sm">
          Already have a account?{" "}
          <a
            className="font-medium text-voilet decoration-2 hover:underline"
            href="#"
            onClick={(e) => redirectForm(1)}
          >
            Sign in here
          </a>
        </p>
      </div>
      <Separator />
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="grid gap-y-4">
          {/*Email Address Input*/}
          <InputBox
            type="email"
            value={values.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.email}
            label="Email address"
          />

          {/*Password Input*/}
          <InputBox
            type="password"
            label="Password"
            value={values.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.password}
          />

          {/*Confirm Password Input*/}
          <InputBox
            type="password"
            name="confirmPassword"
            label="Confirm password"
            value={values.confirmPassword}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.confirmPassword}
          />
          {/* Checkbox */}
          {/*<div className="flex items-center">
						<div className="flex">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="shrink-0 mt-0.5 bg-dark-gray border-2 border-light-gray rounded text-blue-600 pointer-events-none focus:ring-blue-500"
							/>
						</div>
						<div className="ms-3">
							<label htmlFor="remember-me" className="text-sm">
								I accept the{" "}
								<a
									className="font-medium text-voilet decoration-2 hover:underline"
									href="#"
								>
									Terms and Conditions
								</a>
							</label>
						</div>
					</div>*/}
          {/* End Checkbox */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center w-full px-4 py-3 mt-4 text-sm font-medium text-white border border-transparent rounded-lg gap-x-2 bg-voilet disabled:opacity-50 disabled:pointer-events-none"
          >
            Submit
          </button>
        </div>
        {error && (
          <div id="error-display" className="w-full mt-4 text-center">
            <span className="text-sm font-[500] text-red-500">{error}</span>
          </div>
        )}
      </form>
    </Wrapper>
  );
}
