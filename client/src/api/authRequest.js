import axios from "axios";

const BASEURL = "http://localhost:5000";
const API = axios.create({ baseURL: BASEURL });

export const userLogin = async (formData) => {
	const response = await API.post("/login", formData);
};
