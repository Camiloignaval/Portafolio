import React, { useEffect } from "react";
import "./header.css";
import { TextoPrincipal } from "./TextoPrincipal";
import miFoto from "/assets/Wallpaper_mio.png";

export const Header = () => {
	useEffect(() => {
		document.querySelector(".navbar-toggler").classList.add("collapsed");
		document.querySelector("#navbarNav").classList.remove("show");
	}, []);
	return (
		<header style={{ backgroundImage: `url( ${miFoto} )` }}>
			<TextoPrincipal />
		</header>
	);
};
