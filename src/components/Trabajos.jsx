import React, { memo, useRef } from "react";
import { Trabajo } from "./Trabajo";
import "./trabajos.css";

export const Trabajos = memo(() => {
  const ref = useRef(null);

  const listaTrabajos = [
    {
      nombre: "Tienda de sushi",
      video: "https://www.youtube.com/embed/m52rXNKZO9E",
      desc: "Página en producción, cuenta con flujo para compra de cliente, e interfaz para administración con amplias opciones para manejar el negocio",
      techs: [
        "Javascript",
        "React",
        "NextJs",
        "Material-UI",
        "Google Api",
        "RTK Query",
      ],
      // github: "https://github.com/Camiloignaval/cotizadorCriptos",
      pagina: "http://www.sushipanko.cl",
    },
    {
      nombre: "Cotizador criptomonedas",
      video: "https://www.youtube.com/embed/NnsSXNEciwY",
      desc: "Página para cotizar criptomonedas a distintas desde distintas monedas del mundo",
      techs: [
        "Javascript",
        "React",
        "Styled-Components",
        "Material-UI",
        "Node",
        "Express",
      ],
      github: "https://github.com/Camiloignaval/cotizadorCriptos",
      pagina: "https://cotizadorcr.netlify.app/",
    },
    {
      nombre: "Calendario y notas",
      video: "https://www.youtube.com/embed/Ul4e9-LnPK4",
      desc: "Página para guardar notas y recordatorios entre un equipo",
      techs: ["Javascript", "React", "Redux", "MongoDB", "Node", "Express"],
      github: "https://github.com/Camiloignaval/mern-calendar-backend",
      pagina: "https://mern-calendar-git.herokuapp.com/",
    },
    {
      nombre: "Aplicación pequeños y medianos gimnasios",
      video: "https://www.youtube.com/embed/p_A2GHfy6Bg",
      desc: "EN PROCESO... Aplicación web para el orden en pequeños y medianos gimnasios",
      techs: ["Javascript", "React", "Redux", "PostgreSQL", "Node", "Express"],
      github:
        "https://github.com/Camiloignaval/proyectoTituloFront/tree/main/frontGym",
    },
  ];

  return (
    <>
      <div ref={ref} className="contenedorTrabajos row mx-auto my-auto">
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
});
