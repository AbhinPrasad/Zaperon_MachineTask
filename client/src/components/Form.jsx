import React, { useState } from "react";
import {
	TextField,
	Box,
	Grid,
	FormControl,
	InputLabel,
	InputAdornment,
	OutlinedInput,
	IconButton
} from "@mui/material";
import userIcon from "../assets/ic_user.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import validationSchema from "../constants/validationSchema";
import { userLogin } from "../api/authRequest";

function Form() {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			console.log(values);
            userLogin(values)
		}
	});

	return (
		<div className="form_container">
			<div className="user_icon">
				<img src={userIcon} alt="" />
			</div>
			<div className="text">
				<h2>Welcome!</h2>
				<p>
					Let's connect to your workspace
					<br /> Please enter your email to continue.{" "}
				</p>
			</div>
			<div className="form">
				<form noValidate onSubmit={formik.handleSubmit}>
					<div className="input">
						<TextField
							className="textfield"
							id="outlined-basic"
							label="Email Address"
							variant="outlined"
							onChange={formik.handleChange}
							name="email"
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email ? (
							<p className="formik_error">{formik.errors.email}</p>
						) : null}
						<FormControl variant="outlined" className="textfield">
							<InputLabel htmlFor="outlined-adornment-password">
								Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								name="password"
								type={showPassword ? "text" : "password"}
								onChange={formik.handleChange}
								value={formik.values.password}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											edge="end">
											{showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
						{formik.touched.password && formik.errors.password ? (
							<p className="formik_error">{formik.errors.password}</p>
						) : null}
					</div>

					<div className="other">
						<a href="" className="link">
							Forgot Password?
						</a>
						<button className="button" type="submit">
							Sign In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Form;
