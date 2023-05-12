import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";

export function App() {
	return (
		<div className="App">
			<BrowserRouter basename="/Test-Portfolio">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						{/* <Route path="blogs" element={<Blogs />} /> */}
						{/* <Route path="contact" element={<Contact />} /> */}
						{/* <Route path="*" element={<NoPage />} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
