import React from "react";
import "../Styles/Beneficios.css";
import teamWork from "../Assets/juicy-team-discussing-the-project.gif";
import Anywhere from "../Assets/juicy-girl-is-engaged-in-online-training.gif";
import Worki from "../Assets/juicy-girl-working-at-home.gif";

export default function Beneficios() {

  return (
    <section className="beneficios">
      <div className="top">
        <center>
          <h2>Simplificamos el proceso de subir trabajos</h2>
          <p>
            Con ploud los estudiantes del poli tienen una vista mas simple de
            sus materias, trabajos y pendientes.
          </p>
        </center>
      </div>

      <div className="beneficios__mejores">
        <div className="beneficios__mejores-item">
          <figure>
            <img src={teamWork} alt="options" />
          </figure>
          <p className="item__titulo">Colaboración Mejorada</p>
          <center>
            <p className="caption">
              Crea equipos y entrega tarea en grupo facilmente.
            </p>
          </center>
        </div>
        <div className="beneficios__mejores-item">
          <figure>
            <img src={Anywhere} alt="options" />
          </figure>
          <p className="item__titulo">Todas tus materias</p>
          <center>
            <p className="caption">
              Todas tus asignaturas ordenadas en un solo lugar.
            </p>
          </center>
        </div>
        <div className="beneficios__mejores-item">
          <figure>
            <img src={Worki} alt="options" />
          </figure>
          <p className="item__titulo">Retroalimentación</p>
          <center>
            <p className="caption">
              Recibe calificación y comentarios de tus profesores.
            </p>
          </center>
        </div>
      </div>
    </section>
  );
}
