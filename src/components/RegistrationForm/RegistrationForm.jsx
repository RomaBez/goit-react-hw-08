import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Form, Formik, Field } from "formik";

import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (value, action) => {
    dispatch(register(value));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
          <Field type="text" name="name" />
        </label>
        <label htmlFor="email" className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label htmlFor="password" className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
