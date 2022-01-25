import React, { useState, useEffect, useContext, memo } from "react";
import "./trabajo.css";
import "animate.css";
import { DarkContext } from "../context/DarkContext";
import Swal from "sweetalert2";
import { ButtonTrabajo } from "./buttonTrabajo";

export const Trabajo = memo(
	({ nameFoto, desc, listTech, git, video, pagina }) => {
		const { isDark } = useContext(DarkContext);
		const [showInfo, setShowInfo] = useState(false);
		const innerHeigth = window.innerHeight;
		useEffect(() => {
			// cerrar nav
			document.querySelector(".navbar-toggler").classList.add("collapsed");
			document.querySelector("#navbarNav").classList.remove("show");
		}, []);

		// darkmode

		useEffect(() => {
			const botones = document.querySelectorAll(".btn-group");
			botones.forEach((i) => {
				eval(isDark)
					? i.classList.add("darkMode2")
					: i.classList.remove("darkMode2");
			});
		}, [isDark]);

		const handleClickOut = () => {
			console.log(window.innerHeight);
			document
				.querySelector(".informacion")
				.classList.add("animate__fadeOutLeft");
			setTimeout(() => {
				setShowInfo(false);
			}, 500);
		};

		const handleLive = () => {
			pagina === "#"
				? Swal.fire({
						position: "bottom-end",
						icon: "info",
						title: "Lo siento, en este momento no esta disponible la página",
						showConfirmButton: false,
						timer: 2000,
				  })
				: (window.location.href = pagina);
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
					<ButtonTrabajo
						click={() => {
							window.location.href = git;
						}}
						name={"Repositorio"}
						icono={"fab fa-github"}
					/>
					<ButtonTrabajo
						click={handleLive}
						name={"Muestra en vivo"}
						icono={"fas fa-info-circle"}
					/>

					{!showInfo ? (
						<ButtonTrabajo
							click={() => setShowInfo(true)}
							name={"Información"}
							icono={"far fa-window-restore"}
						/>
					) : (
						<ButtonTrabajo
							click={handleClickOut}
							name={"Ocultar info"}
							icono={"fas fa-info-circle"}
						/>
					)}
				</div>
			</div>
		);
	},
);
