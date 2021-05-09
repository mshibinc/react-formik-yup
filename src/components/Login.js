import React from "react";
import { Formik } from "formik";
import LoginForm from "./LoginForm";
import LoginSchema from "./LoginSchema";
export default () => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Formik
      component={LoginForm}
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    />
  );
};
