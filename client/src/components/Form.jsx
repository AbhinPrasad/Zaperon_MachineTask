import React, { useState } from "react";
import {
	TextField,
	Box,
	Typography,
	FormControl,
	InputLabel,
	InputAdornment,
	OutlinedInput,
	IconButton,
	Button,
	Avatar
} from "@mui/material";
import userIcon from "../assets/ic_user.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import validationSchema from "../constants/validationSchema";
import { userLogin } from "../api/authRequest";
import { useNavigate } from "react-router-dom";
import { Spinner } from ".";

function Form() {
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			setLoading((prevState) => !prevState);
			userLogin(values).then((res) => {
				console.log(res);
				setLoading(false);
				const userData = {
					email: res.data.email_id,
					token: res.data.token
				};
				localStorage.setItem("user", JSON.stringify(userData));
				resetForm({ values: "" });
				navigate("/home");
			});
		}
	});

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				// height: "520px",
				flexDirection: "column",
				// background: "grey",
				height: {
					md: 520,
					sm: 480
				}
				// gap: {
				// 	md: "35px"
				// }
			}}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					opacity: "1",
					background: "#efefef",
					height: {
						md: 100,
                        sm:60
					},
					width: {
						md: 100,
                        sm:60
					},
					borderRadius: {
						md: "70px",
                        sm:30
					},
					marginTop: "40px"
				}}>
				<Avatar
					src={userIcon}
					sx={{
						width: {
							md: "50px"
						},
						height: {
							md: "50px"
						}
					}}
				/>
			</Box>
			<Box
				sx={{
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
				}}>
				<Typography
					sx={{
						letterSpacing: "0px",
						color: "#0b3558",
						opacity: 1,
						font: "normal normal bold 40px/65px Open Sans",
						fontSize: {
							lg: "40px",
							md: "35px",
                            sm:"30px"
						}
					}}>
					Welcome!
				</Typography>
				<Typography
					variant="h6"
					sx={{
						color: "#0b3558",
						letterSpacing: "0px",
						opacity: 1,
						fontSize: { lg: "15px", md: "14px",sm:"12px" },
					}}>
					Let's connect to your workspace <br /> Please enter your email to
					continue.{" "}
				</Typography>
			</Box>
			<Box>
				<form noValidate onSubmit={formik.handleSubmit}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
							marginTop: {
								sm: "15px"
							}
						}}>
						<TextField
							id="outlined-basic"
							size="small"
							label="Email Address"
							variant="outlined"
							onChange={formik.handleChange}
							name="email"
							value={formik.values.email}
							sx={{ width: { md: "360px",sm:"330px" } }}
						/>
						{formik.touched.email && formik.errors.email ? (
							<Typography
								sx={{
									color: "red",
									lineHeight: "0",
									margin: "5px",
									fontWeight: "500",
									fontSize: "12px"
								}}>
								{formik.errors.email}
							</Typography>
						) : null}
						<FormControl variant="outlined" className="textfield">
							<InputLabel
								htmlFor="outlined-adornment-password"
								size="small">
								Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								sx={{ width: { md: "360px" } }}
								name="password"
								type={showPassword ? "text" : "password"}
								onChange={formik.handleChange}
								value={formik.values.password}
								size="small"
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
							<Typography
								sx={{
									color: "red",
									lineHeight: "0",
									margin: "5px",
									fontWeight: "500",
									fontSize: "12px"
								}}>
								{formik.errors.password}
							</Typography>
						) : null}
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							marginTop: "10px",
							gap: {
								lg: "5px"
							}
						}}>
						<Typography
							sx={{
								textAlign: "end",
								letterSpacing: "0px",
								color: "#003fb9",
								font: "normal normal 600 13px/27px Open Sans"
							}}>
							Forgot Password?
						</Typography>
						<Button
							type="submit"
							variant="contained"
							sx={{
								background: "#003fb9",
								textTransform: "unset",
								color: "#fff",
								boxShadow: "0px 3px 6px #0000029",
								font: "normal normal 600 13px/27px Open Sans",
								borderRadius: "4px",
								height: {
									lg: "36px"
								}
							}}>
							{loading ? <Spinner /> : "Sign In"}
						</Button>
					</Box>
				</form>
			</Box>
		</Box>
	);
}

export default Form;
