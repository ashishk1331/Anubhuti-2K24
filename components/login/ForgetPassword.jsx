// Libraries
import { useFormik } from "formik";

// components
import Separator from "@/components/ui/Separator.jsx";
import InputBox from "@/components/ui/InputBox.jsx";

// Helper
import { ForgetPasswordSchema } from "./ForgetPassword.schema.js";
import { useStore } from "@/store/useForm.store.js";
import Wrapper from "./Wrapper.jsx";
import { account } from "@/Appwrite/appwrite.config.js";
import { useState } from "react";

export default function (props) {
  const redirectForm = useStore((state) => state.setForm);
  const [error, setError] = useState("");
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgetPasswordSchema,
    onSubmit: async function (values, actions) {
      try {
        setError("");
        let { email } = values;
        const promise = await account.createRecovery(
          email,
          "https://anubhuti-2-k24.vercel.app/login"
        );
        console.log(promise);
        actions.resetForm();
      } catch (error) {
        setError(error.message);
      }

      // reset the form
    },
  });

  return (
    <Wrapper>
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
          Forget Password
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Remember your password?{" "}
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
