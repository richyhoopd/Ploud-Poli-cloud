import FormTop from "../Components/FormTop";
import Nav from "../Components/Nav";
import { useNavigate } from "react-router-dom";
import "../Styles/form__problem.scss";
import Footer from "../Components/Footer";
import { useState } from "react";
import Laptop from "../Assets/Laptop-icon.png";

export default function PcRepairOptions() {
  const navigate = useNavigate();
  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const {
  //   filt: { problem },
  // } = state;

  const [problemName, setProblem] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    //   ctxDispatch({ type: "SAVE_PROBLEM", payload: [problemName] });
    localStorage.setItem("problem", problemName);
    const category = localStorage.getItem("category");
    if (category !== "Laptops") {
      localStorage.setItem("category", "Laptops");
    }
    navigate(`/repara/dispositivo/?category=Laptops?part=${problemName}`);
  };

  return (
    <>
      <div className="form__problem">
        <Nav />
        <FormTop
          tittle="Cuéntanos tu problema con tu celular"
          parragraph="¡Elige entre los problemas más comunes o contáctanos por WhatsApp si no encuentras lo que buscas!"
          current2="form__top-progress-bar-current"
        />
        <form onSubmit={submitHandler} className="form__problem__container">
          <input
            type="checkbox"
            id="Lenta"
            value="Lenta"
            checked={problemName === "Lenta"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Lenta">
            <img src={Laptop} alt="" />
            <span>Lenta</span>
            <p>Problemas de rendimiento</p>
          </label>

          <input
            type="checkbox"
            id="Virus"
            value="Virus"
            checked={problemName === "Virus"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Virus">
            <img src={Laptop} alt="" />
            <span>Virus</span>
            <p>Malware instalado</p>
          </label>

          <input
            type="checkbox"
            id="Azul"
            value="Azul"
            checked={problemName === "Azul"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Azul">
            <img src={Laptop} alt="" />
            <span>Pantalla Azul</span>
            <p>¿No sabes a qué se debe ni como solucionarlo?</p>
          </label>

          <input
            type="checkbox"
            id="Apagones"
            value="Apagones"
            checked={problemName === "Apagones"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Apagones">
            <img src={Laptop} alt="" />
            <span>Apagones</span>
            <p>Repentinos y sin previo aviso</p>
          </label>

          <input
            type="checkbox"
            id="Almacenamiento"
            value="Almacenamiento"
            checked={problemName === "Almacenamiento"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Almacenamiento">
            <img src={Laptop} alt="" />
            <span>Almacenamiento</span>
            <p>Lleno o con poco espacio</p>
          </label>

          <input
            type="checkbox"
            id="Ruidos"
            value="Ruidos"
            checked={problemName === "Ruidos"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Ruidos">
            <img src={Laptop} alt="" />
            <span>Ruidos</span>
            <p>¿Ruidos constantes y molestos?</p>
          </label>

          <input
            type="checkbox"
            id="Hot"
            value="Hot"
            checked={problemName === "Hot"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Hot">
            <img src={Laptop} alt="" />
            <span>Sobrecalentamiento</span>
            <p>¿Altas temperaturas sin razón aparente?</p>
          </label>

          <input
            type="checkbox"
            id="Programas"
            value="Programas"
            checked={problemName === "Programas"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Programas">
            <img src={Laptop} alt="" />
            <span>Programas</span>
            <p>Instalación o desinstalación de software</p>
          </label>

          <input
            type="checkbox"
            id="Bateria"
            value="Bateria"
            checked={problemName === "Bateria"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Bateria">
            <img src={Laptop} alt="" />
            <span>Batería</span>
            <p>¿Se acaba muy rápido?</p>
          </label>

          <div className="form__problem__buttons">
            <button type="submit">Siguiente</button>
            <a
              className="cotiza"
              href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20acerca%20de%20como%20reparar%20con%20chipsi."
            >
              Cotiza por WhatsApp
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
