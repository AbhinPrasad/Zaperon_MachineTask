import * as Yup from "yup";

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Please enter a valid email.")
		.required("Email is required"),
	password: Yup.string()
		.min(8,"Password must be 8 character long.")
		.required("Password is required")
});

export default validationSchema;
