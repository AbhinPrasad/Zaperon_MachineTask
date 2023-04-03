import React from "react";
import Logo from "../assets/zaperon_logo.png";

function Footer() {
	return (
		<div className="footer_container">
			<div className="logo">
				Powered by
				<img src={Logo} alt="" />
			</div>
			<div className="options">
				<h5> Need Help</h5>
				<h5> Privacy Policy & Terms</h5>
			</div>
		</div>
	);
}

export default Footer;
