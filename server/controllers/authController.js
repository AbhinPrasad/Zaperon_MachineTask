import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const userLogin = async (req, res) => {
	console.log(req.body);
	try {
		if (!req.body.email || !req.body.password) {
			res.status(400).json({ message: "Enter all fields" });
		} else {
			const { email, password } = req.body;

			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);

			const user = new User({
				email,
				password: hashedPassword
			});

			await user.save();
			console.log(user.email);
			res.status(201).json({
				email_id: user.email,
				token: generateToken(user._id)
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};

const generateToken = (userId) => {
	try {
		return jwt.sign({ userId }, process.env.JWT_KEY, {
			expiresIn: "1h"
		});
	} catch (err) {
		console.log(err);
	}
};
