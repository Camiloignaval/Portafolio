import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark'>
			<a className='navbar-brand' href='#'></a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse ' id='navbarNav'>
				<ul className='navbar-nav '>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/'>
							<span className='overline-left-underline-right'>Inicio</span>
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/contact'>
							<span className='overline-left-underline-right'>Contacto</span>
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/works'>
							<span className='overline-left-underline-right'>Trabajos</span>
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/skills'>
							<span className='overline-left-underline-right'>Skills</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
