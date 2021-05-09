import * as Yup from "yup";
export default Yup.object().shape({
  password: Yup.string()
    .min(2, "To Short")
    .max(50, "To Loong")
    .required("Required")
});
