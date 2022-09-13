import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "../Styles/Materia.scss";

export default function Materia() {
  return (
    <>
      <article className="curse">
      <span className="si" style={{fontSize: '32px', fontWeight: 'Bold'}}>Diseño y desarrollo de Aplicaciónes Web </span>
        <p className="text si">
          Paulina Sarai Gomez Rodriguez
        </p>
        <div className="curse__section">
            <label className="border__radius__tiny transition" htmlFor="section">
            <span className="si" style={{fontSize: '28px', fontWeight: 'Bold'}}>Bloque 1: HTML y CSS</span>
            </label>
            <input type="checkbox" id="section" />
            <div className="curse__section-tasks border__radius__tiny">
                <Link className="text transition" to="entrega">
                    <h3>Elementos</h3>
                </Link>
                <Link className="text transition" to="entrega">
                    <h3>Selectores, clases y pseudoclases</h3>
                </Link>
                <Link className="text transition" to="entrega">
                    <h3>Flexbox y Grid</h3>
                </Link>
            </div>
        </div>
        <div className="curse__section">
            <label className="border__radius__tiny transition" htmlFor="section2">
            <span className="si" style={{fontSize: '28px', fontWeight: 'Bold'}}>Bloque 2: JavaScript</span>

            </label>
            <input type="checkbox" id="section2" />
            <div className="curse__section-tasks border__radius__tiny">
                <Link className="text transition" to="entrega">
                    <h3>Variables, funciones y ciclos</h3>
                </Link>
                <Link className="text transition" to="entrega">
                    <h3>Estructuras de datos y jquery</h3>
                </Link>
                <Link className="text transition" to="entrega">
                    <h3>Conexiones con frontend</h3>
                </Link>
            </div>
        </div>
        <div className="curse__section">
            <label className="border__radius__tiny transition" htmlFor="section3">
            <span className="si" style={{fontSize: '28px', fontWeight: 'Bold'}}>Bloque 3: Frameworks</span>
            </label>
            <input type="checkbox" id="section3" />
            <div className="curse__section-tasks border__radius__tiny">
                <Link className="text transition" to="entrega">
                    <h3>Node.js</h3>
                </Link>
                <Link className="text transition" to="entrega">
                    <h3>React.js</h3>
                </Link>
                <Link className="text transition" to="entrega">
                    <h3>Tailwind y Bootstrap</h3>
                </Link>
            </div>
        </div>
      </article>
    </>
  );
}