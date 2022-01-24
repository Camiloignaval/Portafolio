import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { Trabajo } from "./Trabajo";
import "./trabajos.css";

export const Trabajos = () => {
	const ref = useRef(null);

	const listaTrabajos = [
		{
			nombre: "Cotizador criptomonedas",
			video: "https://www.youtube.com/embed/NnsSXNEciwY",
			desc: "Página para cotizar criptomonedas a distintas desde distintas monedas del mundo",
			techs: ["Javascript", "React", "Styled-Components", "Material-UI"],
			github: "https://github.com/Camiloignaval/cotizadorCriptos",
			pagina: "https://cotizadorcr.netlify.app/",
		},
		{
			nombre: "Cotizador criptomoneda2",
			video: "https://www.youtube.com/embed/NnsSXNEciwY",
			desc: "Página para cotizar criptomonedas desde distintas monedas del mundo",
			techs: ["Javascript", "React", "Styled-Components", "Material-UI"],
			github: "https://github.com/Camiloignaval/cotizadorCriptos",
		},
		{
			nombre: "Cotizador criptomonedas3",
			video: "https://www.youtube.com/embed/NnsSXNEciwY",
			desc: "Página para cotizar criptomonedas a distintas desde distintas monedas del mundo",
			techs: ["Javascript", "React", "Styled-Components", "Material-UI"],
			github: "https://github.com/Camiloignaval/cotizadorCriptos",
			pagina: "https://cotizadorcr.netlify.app/",
		},
		{
			nombre: "Cotizador criptomoneda4",
			video: "https://www.youtube.com/embed/NnsSXNEciwY",
			desc: "Página para cotizar criptomonedas desde distintas monedas del mundo",
			techs: ["Javascript", "React", "Styled-Components", "Material-UI"],
			github: "https://github.com/Camiloignaval/cotizadorCriptos",
		},
	];
	// gsap.registerPlugin(ScrollTrigger);
	// const trabajos = document.querySelectorAll(".trabajo");

	// const tl = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".trabajo",
	// 		markers: true,
	// 		start: "50% top%",
	// 		end: "end end",
	// 		scrub: true,
	// 		toggleActions: "play none none reverse",
	// 		pin: ".contenedorTrabajos",
	// 	},
	// });
	// tl.from(".trabajo0", {
	// 	rotation: 360,
	// 	duration: 2,
	// });

	return (
		<>
			<div ref={ref} className='contenedorTrabajos row mx-auto my-auto'>
				{listaTrabajos.map((tr, i) => (
					<div className={`trabajo trabajo${i}`} key={tr.nombre}>
						<Trabajo
							nameFoto={tr.nombre}
							desc={tr.desc}
							listTech={tr.techs}
							git={tr.github}
							video={tr.video}
							pagina={tr.pagina}
						/>
					</div>
				))}
			</div>
		</>
	);
};
