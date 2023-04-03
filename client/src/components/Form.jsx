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

function Form() {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

    const initialValues = {
        email:"",
        password:""
    }

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
				<form>
					<TextField
						className="textfield"
						id="outlined-basic"
						label="Email Address"
						variant="outlined"
					/>
					<FormControl variant="outlined" className="textfield">
						<InputLabel htmlFor="outlined-adornment-password">
							Password
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={showPassword ? "text" : "password"}
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
					<a href="" className="link">
						Forgot Password?
					</a>
					<button className="button" type="submit">
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
}

export default Form;
