import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar.jsx";
import "./header.css";

export const Home = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};
