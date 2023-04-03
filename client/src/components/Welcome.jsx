import React, { useEffect, useState } from "react";
import userIcon from "../assets/ic_user.svg";

function Welcome() {
	const [user, setUser] = useState("");

	useEffect(() => {
		const retrievedKey = localStorage.getItem("user");
		const retrievedObject = JSON.parse(retrievedKey);
		const email = retrievedObject.email;
		setUser(email);
	}, []);

	return (
		<div className="form_container">
			<div className="user_icon">
				<img src={userIcon} alt="" />
			</div>
			<div className="text">
				<h2>Welcome!</h2>
                <h4>{user}</h4>
			</div>
		</div>
	);
}

export default Welcome;
