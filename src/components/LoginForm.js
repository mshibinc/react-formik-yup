import { Form } from "formik";
export default ({ handleChange, values, errors, isValid }) => {
  return (
    <Form className="signup">
      <div>{errors.email}</div>
      <input
        type="email"
        onChange={handleChange}
        value={values.email}
        placeholder="Email"
      />
      <input
        type="password"
        onChange={handleChange}
        value={values.password}
        placeholder="Password"
      />
      <button disabled={!isValid}>Submit</button>
    </Form>
  );
};
