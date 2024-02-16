// Libraries
"use client";
import { useFormik } from "formik";

// Components
import Separator from "@/components/ui/Separator.jsx";
import InputBox from "@/components/ui/InputBox.jsx";

// Helper
import { LoginSchema } from "./Login.schema.js";
import { useStore } from "@/store/useForm.store.js";
import Wrapper from "./Wrapper.jsx";
import { account } from "@/Appwrite/appwrite.config.js";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function (props) {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const redirect = searchParams.get("redirect");
  const redirectForm = useStore((state) => state.setForm);
  const setLoggedInUser = useStore((state) => state.setLoggedInUser);
  const [error, setError] = useState("");
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
    },
    validationSchema: LoginSchema,
    onSubmit: async function (values, actions) {
      setError("");
      let { email, password } = values;
      try {
        const response = await account.createEmailSession(email, password);
        const loggedIn = await account.get();
        setLoggedInUser(loggedIn);
        setSubmitting(false);
        actions.resetForm();
        router.push("/");
        // if (loggedIn) redirect ? router.push(redirect) : router.push("/");
      } catch (error) {
        setError(error.message);
      }
    },
  });

  return (
    <Wrapper>
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
          Sign in
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Don't have an account yet?{" "}
          <a
            className="font-medium text-voilet decoration-2 hover:underline"
            href="#"
            onClick={(e) => redirectForm(2)}
          >
            Sign up here
          </a>
        </p>
      </div>
      <Separator />
      {/* Form */}
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
            label={
              <div className="flex items-center justify-between">
                <span>Password</span>
                {/* <a
                  className="text-sm font-medium text-voilet decoration-2 hover:underline"
                  href="#"
                  onClick={(e) => redirectForm(0)}
                >
                  Forgot password?
                </a> */}
              </div>
            }
            value={values.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.password}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center w-full px-4 py-3 mt-4 text-sm font-medium text-white border border-transparent rounded-lg gap-x-2 bg-voilet disabled:opacity-50 disabled:pointer-events-none"
          >
            Sign in
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
