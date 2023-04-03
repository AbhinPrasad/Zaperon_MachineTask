import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
