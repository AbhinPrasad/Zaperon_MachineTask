import express from "express";
import cors from "cors";
import colors from "colors";
import * as dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server connected to ${PORT}`.bgMagenta);
});
