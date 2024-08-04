import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Form, Formik, Field } from "formik";

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
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email
          <Field type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
