import { ErrorMessage, Field, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const styles = {
  label: "block text-gray-600 text-sm  pt-2 pb-1 ",
  field:
    "bg-white text-gray-700 focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block w-full appearance-none w-[100%]",
  button:
    " bg-green-700 w-[200px] text-white py-3 px-4 w-full rounded hover:bg-green-600 font-light",
  errorMsg: "text-red-500 text-xs",
};
const ChangePasswordForm = () => {
  const ChangePasswordSchema = {
    old_password: Yup.string()
      .required(" Old Password is Required")
      .min(3, "Too Short!"),
    password: Yup.string()
      .required("Password is Required")
      .min(3, "Too Short!"),
    password_confirmation: Yup.string()
      .required("Confirm Password is Required")
      .min(3, "Too Short!"),
  };
  const initialValues = {
    old_password: "",
    password: "",
    password_confirmation: "",
  };
  const handleSubmit = (e) => {};
  return (
    <div className="">
      <h1 className="text-center">Change Password</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ChangePasswordSchema}
      >
        <div className="flex flex-col gap-[1rem] ">
          <div>
            <label className={styles.label} htmlFor="password">
              Old Password
            </label>
            <Field
              className={styles.field}
              id="old_password"
              name="old_password"
            />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="old_password"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <Field className={styles.field} id="password" name="password" />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="password"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="password_confirmation">
              Confirm password
            </label>
            <Field
              className={styles.field}
              id="password_confirmation"
              name="password_confirmation"
            />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="password_confirmation"
            />
          </div>
          <button type="submit">Change Password</button>
        </div>
      </Formik>
    </div>
  );
};

export default ChangePasswordForm;
