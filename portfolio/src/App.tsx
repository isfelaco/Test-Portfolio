import React, { ReactElement } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";

export const pages: { [id: string]: ReactElement } = {
	// "/about": <About />,
	"/experience": <Experience />,
	// "/projects": <Projects />,
};

export function App() {
	return (
		<div className="App">
			<BrowserRouter basename="/Test-Portfolio">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						{Object.entries(pages).map(([route, element], i) => (
							<Route path={route} element={element} key={i} />
						))}
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
