import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
// import { register } from "@/apiCalls/auth";
import { getSingleErrorMessage } from "@/utils/Errors";
// import { setUserState } from "@/store/features/userSlice";
// import { setUserState } from "@/store/features/profileSlice";
import { useRouter } from "next/router";
import ImageField from "@/components/utils/ImageField";
import { Label } from "reactstrap";
const styles = {
  label: "block text-gray-600 text-sm  pt-2 pb-1",
  field:
    "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none min-w-[600px]",
  button:
    " bg-green-700 w-[200px] text-white py-3 px-4 w-full rounded hover:bg-green-600 font-light",
  errorMsg: "text-red-500 text-xs",
};

const UpdateUser = () => {
  const router = useRouter();
  const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email().required("Email is Required"),
    mobile: Yup.string().required("Mobile is Required"),
    dob: Yup.string().required("Date Of Birth is Required"),
    email: Yup.string().required("Email is Required"),
  });

  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const handleSubmit = async (
    { name, email, password, password_confirmation },
    { setErrors }
  ) => {
    alert(
      JSON.stringify({ name, email, password, password_confirmation }, null, 2)
    );
    const res = await register({
      name,
      email,
      password,
      password_confirmation,
    });
    const { data, status } = res;
    if (status != 200 || status != 201) {
      const messages = getSingleErrorMessage(data.errors);
      setErrors(messages);
    }

    setUserState({ payload: data.data.user });
    setAuthState({ payload: true });
    router.push("/");
  };
  return (
    <div className=" overflow-hidden shadow bg-white flex-1">
      <div className="flex flex-col gap-12 m-4 sm:mx-8 sm:my-6">
        <Formik
          validationSchema={signUpSchema}
          initialValues={{
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <label className={styles.label} htmlFor="Name">
              Full Name
            </label>
            <Field className={styles.field} id="name" name="name" />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="name"
            />

            <label className={styles.label} htmlFor="Email">
              Email
            </label>
            <Field className={styles.field} id="email" name="email" />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="email"
            />

            <label className={styles.label} htmlFor="mobile">
              Mobile
            </label>
            <Field className={styles.field} id="mobile" name="mobile" />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="mobile"
            />
            <label className={styles.label} htmlFor="about_me">
              Date Of Birth
            </label>
            <Field className={styles.field} id="about_me" name="about_me" />
            <label className={styles.label} htmlFor="about_me">
              About Me
            </label>
            <Field
              as="textarea"
              className={styles.field}
              id="about_me"
              name="about_me"
              rows={5}
            />
          
            <label>Upload Your Picture</label>
            <ImageField
              imageHandler={imageHandler}
              checkFile={checkFile}
              selectedFile={selectedFile}
            />
            <div class="mt-8 flex justify-end">
              <button type="submit" className={styles.button}>
                Update
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UpdateUser;
