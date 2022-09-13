import React from "react";
import { Link } from "react-router-dom";
import Banni from "../Assets/8255_Hero.png";
import Caca from '../Assets/CACA.png';
import Linux from '../Assets/linux.png';
import "../Styles/TableroAlumno.scss";
import { useContext } from "react";
import { Store } from "../Store";

export default function TableroAlumno() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  return (
    <div className="home text">
      {userInfo ? (
        <div>
      <span className="si" style={{fontSize: '32px', fontWeight: 'Bold'}}>Clases en las que estas anotad@ {userInfo.name}</span>
      <section className="home__curses">
        
        <Link
          to="/materia"
          className="transition home__curses-curso border__radius"
        >
          <img className="border__radius" src={Caca} alt="" />
          <div className="home__curses-curso-text">
            <h3 className="text">Diseño de Aplicaciónes Web</h3>
            <p className="text">
              TPSI 7-B
            </p>
            <p className="docente text">Paulina Sarai Gomez Rodriguez </p>
            
          </div>
        </Link>
        <Link
          to="/materia"
          className="transition home__curses-curso border__radius"
        >
          <img className="border__radius" src={Banni} alt="" />
          <div className="home__curses-curso-text">
            <h3 className="text">Analisis de Requerimientos</h3>
            <p className="text">
              TPSI 7-B
            </p>
            <p className="docente text">Carlos Pablo Sanchez Ceballos</p>
            
          </div>
        </Link>
        <Link
          to="/materia"
          className="transition home__curses-curso border__radius"
        >
          <img className="border__radius" src={Linux} alt="" />
          <div className="home__curses-curso-text">
            <h3 className="text">Instalación de Software</h3>
            <p className="text">TPSI 7-B</p>
            <p className="docente text">Carlos Pablo Sanchez Ceballos</p>
            
          </div>
        </Link>
        
      </section>
        </div>
      ): (
        <div>
         <h1>Inicia sesion para poder acceder a tus clases</h1>
        </div>
      )}
    </div>
  );
}
