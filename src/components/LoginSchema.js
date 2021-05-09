import * as Yup from "yup";
export default Yup.object().shape({
  email: Yup.string().email().required("Enter Your Email"),
  password: Yup.string()
    .min(6, "To Short")
    .max(50, "To Loong")
    .required("Required")
});
