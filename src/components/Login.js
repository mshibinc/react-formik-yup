import LoginForm from "./LoginForm";
import LoginSchema from "./LoginSchema";
import { Formik } from "formik";
export default () => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Formik>
      component={LoginForm}
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    </Formik>
  );
};
