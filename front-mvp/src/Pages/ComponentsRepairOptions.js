import FormTop from "../Components/FormTop";
import Nav from "../Components/Nav";
// import { useNavigate } from "react-router-dom";
import "../Styles/form__problem.scss";
import Footer from "../Components/Footer";
// import { useState } from 'react';
import Component_icon from "../Assets/Component-icon.png"


export default function PcRepairOptions() {
    // const navigate = useNavigate();
    // const { state, dispatch: ctxDispatch } = useContext(Store);
    // const {
    //   filt: { problem },
    // } = state;
  
    // const [problemName, setProblem] = useState();
  
    // const submitHandler = (e) => {
    //   e.preventDefault();
    // //   ctxDispatch({ type: "SAVE_PROBLEM", payload: [problemName] });
    //   localStorage.setItem("problem", problemName);
    //   const category = localStorage.getItem("category");
    //   if (category !== "Componentes") {
    //     localStorage.setItem("category", "Componentes");
    //   }
    //   navigate(`/repara/dispositivo/?category=${category}?part=${problemName}`);
    // };
        
      
  return (
    <>
    <div className="form__problem">
      <Nav />
      
      <FormTop
        tittle="Por el momento solo puedes cotizar reparaciones de otros dispositivos vía WhatsApp"
        parragraph="¡Escríbenos un mensaje y con gusto te atenderemos!"
        current2="form__top-progress-bar-current"
      />
      <center><img src={Component_icon} alt="imafge" style={{marginTop: '40px'}}/></center>
      {/* <form onSubmit={submitHandler} className="form__problem__container">
        
        <input type="checkbox" id="Pantalla" value="Pantalla" checked={problemName === "Pantalla"}
          onChange={(e) => setProblem(e.target.value)}/>
        <label htmlFor="Pantalla">
          <img src={Peripheral} alt="" />
          <span>Lenta</span>
          <p>Estrellada, rayada o mojada</p>
        </label>
        
        <input type="checkbox" id="Bateria" value="Bateria" checked={problemName === "Bateria"}
          onChange={(e) => setProblem(e.target.value)}/>
        <label htmlFor="Bateria">
          <img src={Peripheral} alt="" />
          <span>Virus</span>
          <p>Dura poco, no carga, no prende</p>
        </label>
        
        <input type="checkbox" id="centro__de__carga" value="Carga" checked={problemName === "Carga"}
          onChange={(e) => setProblem(e.target.value)}/>
        <label htmlFor="centro__de__carga">
          <img src={Peripheral} alt="" />
          <span>Pantalla Azul</span>
          <p>Tienes que mover el cargador para que cargue</p>
        </label>
        
        <input type="checkbox" id="Microfono" value="Microfono" checked={problemName === "Microfono"}
          onChange={(e) => setProblem(e.target.value)}/>
        <label htmlFor="Microfono">
          <img src={Peripheral} alt="" />
          <span>Apagones</span>
          <p>No te escuchan en llamadas</p>
        </label>
        
        <input type="checkbox" id="Audicular" value="Auricular" checked={problemName === "Auricular"}
          onChange={(e) => setProblem(e.target.value)} />
        <label htmlFor="Audicular">
          <img src={Peripheral} alt="" />
          <span>Almacenamiento</span>
          <p>No te funcionan tus audifonos al conectarlos</p>
        </label>
        
        <input type="checkbox" id="señal" value="Signal" checked={problemName === "Signal"}
          onChange={(e) => setProblem(e.target.value)}/>
        <label htmlFor="señal">
          <img src={Peripheral} alt="" />
          <span>Ruidos</span>
          <p>Poca recepcion, te quedas sin señal</p>
        </label>
        
        <input type="checkbox" id="tapa" value="Tapa" checked={problemName === "Tapa"}
          onChange={(e) => setProblem(e.target.value)}/>
        <label htmlFor="tapa">
          <img src={Peripheral} alt="" />
          <span>Sobrecalentamiento</span>
          <p>Estrellada, rayada o mojada</p>
        </label>
        
        <input type="checkbox" id="botones" value="Botones" checked={problemName === "Botones"}
          onChange={(e) => setProblem(e.target.value)}/>
        <label htmlFor="botones">
          <img src={Peripheral} alt="" />
          <span>Programas</span>
          <p>No puedes subir o bajar volumen</p>
        </label>
        
        <input type="checkbox" id="carga__de__so" value="Os" checked={problemName === "Os"}
          onChange={(e) => setProblem(e.target.value)}/>
        <label htmlFor="carga__de__so">
          <img src={Peripheral} alt="" />
          <span>Carga de SO</span>
          <p>Olvidaste tu cuenta?</p>
        </label>
        <button type="submit" >Siguiente</button>
      </form> */}
      <div className="form__problem__buttons">
        
        <a
            className="cotiza"
            href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20acerca%20de%20como%20reparar%20con%20chipsi."
          >
            Cotiza por WhatsApp
          </a>
      </div>
      
    </div>
    <Footer />
    </> 
  );
}
