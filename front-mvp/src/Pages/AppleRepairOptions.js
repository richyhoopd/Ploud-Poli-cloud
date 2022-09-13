import FormTop from "../Components/FormTop";
import Nav from "../Components/Nav";
import { useNavigate } from "react-router-dom";
import "../Styles/form__problem.scss";
import Footer from "../Components/Footer";
import { useState } from "react";
import Apple from "../Assets/Apple-icon.png";

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
    if (category !== "Apple") {
      localStorage.setItem("category", "Apple");
    }
    navigate(`/repara/dispositivo/?category=Apple?part=${problemName}`);
  };

  return (
    <>
      <div className="form__problem">
        <Nav />
        <FormTop
          tittle="Cuéntanos tu problema con tu dispositivo Apple"
          parragraph="¡Elige entre los problemas más comunes o contáctanos por WhatsApp si no encuentras lo que buscas!"
          current2="form__top-progress-bar-current"
        />
        <form onSubmit={submitHandler} className="form__problem__container">
          <input
            type="checkbox"
            id="Pantalla"
            value="Pantalla"
            checked={problemName === "Pantalla"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Pantalla">
            <img src={Apple} alt="" />
            <span>Pantallas rotas</span>
            <p>Estrelladas, rayadas, quemadas</p>
          </label>

          <input
            type="checkbox"
            id="Botones"
            value="Botones"
            checked={problemName === "Botones"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Botones">
            <img src={Apple} alt="" />
            <span>Botones</span>
            <p>Botones descompuestos</p>
          </label>

          <input
            type="checkbox"
            id="Teclas"
            value="Teclas"
            checked={problemName === "Teclas"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Teclas">
            <img src={Apple} alt="" />
            <span>Teclas</span>
            <p>Rotas, caídas, sueltas</p>
          </label>

          <input
            type="checkbox"
            id="Prende"
            value="Prende"
            checked={problemName === "Prende"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Prende">
            <img src={Apple} alt="" />
            <span>No prende</span>
            <p>No sabes que tiene, pero ¿no prende?</p>
          </label>

          <input
            type="checkbox"
            id="Storage"
            value="Storage"
            checked={problemName === "Storage"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Storage">
            <img src={Apple} alt="" />
            <span>Almacenamiento lleno</span>
            <p>No cabe más información en tu dispositivo</p>
          </label>

          <input
            type="checkbox"
            id="Bateria"
            value="Bateria"
            checked={problemName === "Bateria"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Bateria">
            <img src={Apple} alt="" />
            <span>Batería</span>
            <p>¿Dura poco, no carga o te da avisos?</p>
          </label>

          <input
            type="checkbox"
            id="Hot"
            value="Hot"
            checked={problemName === "Hot"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Hot">
            <img src={Apple} alt="" />
            <span>Sobrecalentamiento</span>
            <p>Dispositivos muy calientes</p>
          </label>

          <input
            type="checkbox"
            id="Programas"
            value="Programas"
            checked={problemName === "Programas"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Programas">
            <img src={Apple} alt="" />
            <span>Programas</span>
            <p>¿Necesitas software?</p>
          </label>

          <input
            type="checkbox"
            id="Os"
            value="Os"
            checked={problemName === "Os"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Os">
            <img src={Apple} alt="" />
            <span>Carga de SO</span>
            <p>¿Olvidaste tu cuenta?</p>
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
