import React from "react";
import Logo from "../assets/zaperon_logo.png";
import { Box, Typography } from "@mui/material";

function Footer() {
	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			sx={{
				flexDirection: { lg: "row", xs: "column" },
				// background: "blue",
				height: { lg: "80px", md: "150px", sm: "130px" },
				alignItems: "center",
				justifyContent: { lg: "space-between", md: "center" },
				gap: "10px"
			}}>
			<Box
				sx={{
					textAlign: "left",
					color: "#728391",
					display: "flex",
					alignItems: "center",
					gap: "10px",
					marginLeft: {
						lg: "50px"
					},
					gap: "10px",
					font: "normal normal normal 14px/27px Open Sans"
				}}>
				Powered by
				<img src={Logo} alt="" style={{ width: "70px", height: "20px" }} />
			</Box>
			<Box
				sx={{
					display: "flex",
					color: "#003fb9",
					gap: {
						lg: "20px",
						xs: "10px"
					},
					marginRight: {
						lg: "50px"
					},
					flexDirection: {
						lg: "row",
						xs: "column"
					},
					alignItems: "center"
				}}>
				<Typography sx={{ fontWeight: "700", fontSize: "0.83rem" }}>
					{" "}
					Need Help?
				</Typography>
				<Typography sx={{ fontWeight: "700", fontSize: "0.83rem" }}>
					{" "}
					Privacy Policy & Terms
				</Typography>
			</Box>
		</Box>
	);
}

export default Footer;
