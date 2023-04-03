import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";
import { ProtectedRoute, PublicRoute } from "./auth";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>
				<Route
					path="/home"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
