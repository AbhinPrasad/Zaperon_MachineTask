import React from "react";
import { Footer, Form } from "../components";
import { Box } from "@mui/material";

function Login() {
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center"
			}}>
			<Form />
			<Footer />
		</Box>
	);
}

export default Login;
