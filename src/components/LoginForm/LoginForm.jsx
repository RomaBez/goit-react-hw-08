import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Form, Formik, Field } from "formik";

import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (value, actions) => {
    dispatch(logIn(value));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor="email" className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label htmlFor="password" className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
