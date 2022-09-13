import React from "react";
import Student from "../Assets/juicy-girl-is-working-on-laptop-at-a-remote-job.gif";
import { Link } from "react-router-dom";
import "../Styles/Hero.css";
import { useContext } from "react";
import { Store } from "../Store";



export default function Hero() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  return (
    <section className="hero__banner" style={{marginBottom: '50px'}}>
      <div className="text__part">
        {userInfo && userInfo.isAdmin ? (
        <h1>Bienvenido de nuevo, Maestr@ {userInfo.name}!</h1>
        ) : userInfo ? (
        <h1>Bienvenido de nuevo {userInfo.name}</h1>
        ) : (
        <h1>La nube de tareas del Poli</h1>
        )}
        <p>Emplea tu tiempo haciendo tus tareas, no entregandolas.</p>
        <Link
          to="/login"
          className="maint__btn"
          style={{
            backgroundColor: "#556FCC",
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingRight: "28px",
            paddingLeft: "28px",
            borderRadius: "20px",
            color: "#FAFDFF",
            textDecoration: "none",
          }}
        >
          Ir a tus cursos
        </Link>
       
      </div>
      <figure className="text__part">
        <img src={Student} alt="Student" />
      </figure>
    </section>
  );
}
