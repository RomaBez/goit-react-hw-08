import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";

import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const dataValid = Yup.object().shape({
    name: Yup.string("Must be a string!")
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .trim()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(
      fetchContacts({
        ...values,
        id: nanoid(),
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={dataValid}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.inputField}>
          <label htmlFor={nameId}>Name</label>
          <Field id={nameId} name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.inputField}>
          <label htmlFor={numberId}>Number</label>
          <Field id={numberId} name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
