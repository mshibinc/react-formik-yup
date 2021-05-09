import { Form } from "formik";
export default ({ handleChange, values, errors, isValid }) => {
  return (
    <Form className="signup">
      <input
        type="email"
        onChange={handleChange}
        value={values.email}
        placeholder="Email"
        name="email"
      />
      <span className="error">{errors.email}</span>
      <input
        type="password"
        onChange={handleChange}
        value={values.password}
        placeholder="Password"
        name="password"
      />
      <span className="error">{errors.password}</span>
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </Form>
  );
};
