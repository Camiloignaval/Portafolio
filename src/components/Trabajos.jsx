import React from "react";
import DarkMode from "./DarkMode";
import { Trabajo } from "./Trabajo";
import "./trabajos.css";

export const Trabajos = () => {
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

	return (
		<>
			<div className='contenedorTrabajos row mx-auto my-auto'>
				{listaTrabajos.map((tr) => (
					<div className='trabajo' key={tr.nombre}>
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
