import React, { ReactElement } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";

export const pages: { [id: string]: ReactElement } = {
	"/": <Home />,
	"/about": <About />,
	"/experience": <Experience />,
	// "/projects": <Projects />,
};

export function App() {
	return (
		<div className="App">
			<BrowserRouter basename="/Test-Portfolio">
				<Routes>
					{/* <Route path="/" element={<Layout />}> */}
					{/* <Route element={<Home />} /> */}
					{Object.entries(pages).map(([route, element], i) => (
						<Route path={route} element={element} key={i} />
					))}
					{/* </Route> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}
