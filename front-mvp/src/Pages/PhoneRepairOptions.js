import FormTop from "../Components/FormTop";
import Nav from "../Components/Nav";
import Ipad from "../Assets/Ipad-icon.png";
import { useNavigate } from "react-router-dom";
import "../Styles/form__problem.scss";
import Footer from "../Components/Footer";
import crackedS from "../Assets/screencrack.png";
import { useState } from "react";

export default function PhoneRepairOptions() {
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
    if (category !== "Celulares") {
      localStorage.setItem("category", "Celulares");
    }
    navigate(`/repara/dispositivo/?category=Celulares?part=${problemName}`);
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
            id="Pantalla"
            value="Pantalla"
            checked={problemName === "Pantalla"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Pantalla">
            <img src={crackedS} alt="" />
            <span>Pantalla</span>
            <p>Estrellada, rayada o mojada</p>
          </label>

          <input
            type="checkbox"
            id="Bateria"
            value="Bateria"
            checked={problemName === "Bateria"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Bateria">
            <img src={Ipad} alt="" />
            <span>Batería</span>
            <p>Dura poco, no carga, no prende</p>
          </label>

          <input
            type="checkbox"
            id="centro__de__carga"
            value="Carga"
            checked={problemName === "Carga"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="centro__de__carga">
            <img src={Ipad} alt="" />
            <span>Carga</span>
            <p>Tienes que mover el cargador para que cargue</p>
          </label>

          <input
            type="checkbox"
            id="Microfono"
            value="Microfono"
            checked={problemName === "Microfono"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Microfono">
            <img src={Ipad} alt="" />
            <span>Micrófono</span>
            <p>No te escuchan en llamadas</p>
          </label>

          <input
            type="checkbox"
            id="Audicular"
            value="Auricular"
            checked={problemName === "Auricular"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="Audicular">
            <img src={Ipad} alt="" />
            <span>Auricular</span>
            <p>No te funcionan tus audífonos al conectarlos</p>
          </label>

          <input
            type="checkbox"
            id="señal"
            value="Signal"
            checked={problemName === "Signal"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="señal">
            <img src={Ipad} alt="" />
            <span>Señal</span>
            <p>Poca recepción, te quedas sin señal</p>
          </label>

          <input
            type="checkbox"
            id="tapa"
            value="Tapa"
            checked={problemName === "Tapa"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="tapa">
            <img src={Ipad} alt="" />
            <span>Tapas</span>
            <p>Estrellada, rayada o mojada</p>
          </label>

          <input
            type="checkbox"
            id="botones"
            value="Botones"
            checked={problemName === "Botones"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="botones">
            <img src={Ipad} alt="" />
            <span>Botones</span>
            <p>No puedes subir o bajar volumen</p>
          </label>

          <input
            type="checkbox"
            id="carga__de__so"
            value="Os"
            checked={problemName === "Os"}
            onChange={(e) => setProblem(e.target.value)}
          />
          <label htmlFor="carga__de__so">
            <img src={Ipad} alt="" />
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
