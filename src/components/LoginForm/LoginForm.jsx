import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Form, Formik, Field } from "formik";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (value, actions) => {
    dispatch(logIn(value));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="email">
          Email
          <Field type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
