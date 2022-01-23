import React, { useState, useEffect, useContext, useEffectLayout } from "react";
import "./trabajo.css";
import "animate.css";
import { DarkContext } from "../context/DarkContext";

export const Trabajo = ({ nameFoto, desc, listTech, git, video, pagina }) => {
	useEffect(() => {
		// cerrar nav
		document.querySelector(".navbar-toggler").classList.add("collapsed");
		document.querySelector("#navbarNav").classList.remove("show");
	}, []);

	// darkmode

	const { isDark } = useContext(DarkContext);

	useEffect(() => {
		const botones = document.querySelectorAll(".btn-group");
		botones.forEach((i) => {
			isDark ? i.classList.add("darkMode2") : i.classList.remove("darkMode2");
		});
	}, [isDark]);

	const [showInfo, setShowInfo] = useState(false);
	const handleClickIn = () => {
		// .classList.add("animate__fadeInRightBig");
		setShowInfo(true);
	};
	const handleClickOut = () => {
		document
			.querySelector(".informacion")
			.classList.add("animate__fadeOutLeft");
		setTimeout(() => {
			setShowInfo(false);
		}, 500);
	};
	return (
		<div className='card'>
			<h2 className='tituloTrabajo py-2'>{nameFoto}</h2>

			<div className='resp-container'>
				{showInfo && (
					<div className='informacion animate__animated  animate__fadeInRight'>
						<p className='pt-2 mt-md-4 px-4 mt-2'>{desc}</p>
						<ul className='px-5'>
							{listTech.map((tech) => (
								<li key={tech}>{tech}</li>
							))}
						</ul>
					</div>
				)}
				<iframe
					className='resp-iframe'
					src={video}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
			<div className='btn-group' role='group' aria-label='Basic example'>
				<a
					href={git}
					id='repo'
					className={isDark ? "btn btn-dark" : "btn btn-light"}
				>
					<div className='row'>
						<div className='col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3'>
							<i className='fab fa-github  mx-auto '></i>
						</div>
						<div className='col col-lg-8 col-xl-9 text-md-left text-lg-center text-xl-left p-0'>
							Repositorio
						</div>
					</div>
				</a>

				<a
					href={pagina}
					type='button'
					id='live'
					className={isDark ? "btn btn-dark" : "btn btn-light"}
				>
					<div className='row'>
						<div className='col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3'>
							<i className='far fa-window-restore  mx-auto '></i>
						</div>
						<div className='col col-lg-8 col-xl-9 text-md-left text-lg-center text-xl-left p-0'>
							Muestra en vivo
						</div>
					</div>
				</a>
				{!showInfo ? (
					<a
						onClick={handleClickIn}
						type='button'
						className={isDark ? "btn btn-dark" : "btn btn-light"}
						id='info'
					>
						<div className='row'>
							<div className='col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3'>
								<i className='fas fa-info-circle mx-auto'></i>
							</div>
							<div className='col col-lg-8 col-xl-9 text-md-left text-lg-center text-xl-left p-0'>
								Información
							</div>
						</div>
					</a>
				) : (
					<a
						onClick={handleClickOut}
						type='button'
						className={isDark ? "btn btn-dark" : "btn btn-light"}
						id='info2'
					>
						<div className='row'>
							<div className='col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3'>
								<i className='fas fa-info-circle'></i>
							</div>
							<div className='col col-lg-8 col-xl-9 text-md-left text-lg-center text-xl-left p-0'>
								Ocultar info
							</div>
						</div>
					</a>
				)}
			</div>
		</div>
	);
};
