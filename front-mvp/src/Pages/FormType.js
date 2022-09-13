import Nav from "../Components/Nav";
import Desktop from "../Assets/Desktop-icon.png";
import Laptop from "../Assets/Laptop-icon.png";
import Phone from "../Assets/Phone-icon.png";
import Peripheral from "../Assets/Peripheral-icon.png";
import Component_icon from "../Assets/Component-icon.png";
import FormTop from "../Components/FormTop";
import "../Styles/form__type.scss";
import Footer from "../Components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormType() {
  const navigate = useNavigate();

  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const { userInfo } = state;

  // const [categories, setCategories] = useState([]);
  // const [parts, setParts] = useState([]);

  // useEffect(() => {
  //   const fetchParts = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/products/parts`);
  //       setParts(data);
  //     } catch (err) {

  //     }
  //   };
  //   fetchParts();
  // }, []);
  const [categoryName, setCategory] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    //   ctxDispatch({ type: "SAVE_PROBLEM", payload: [problemName] });
    localStorage.setItem("category", categoryName);
    const category = localStorage.getItem("category");
    if (category === "Perifericos") {
      navigate(`/repara/lineablanca/`);
    } else if (category === "Componentes") {
      navigate("/repara/componentes");
    } else if (category === "Apple") {
      navigate("/repara/apple");
    } else if (category === "PC") {
      navigate(`/repara/pc/?category=${categoryName}`);
    } else if (category === "Laptops") {
      navigate(`/repara/laptop?category=${categoryName}`);
    } else {
      navigate(`/repara/celulares/?category=${categoryName}`);
    }
  };
  return (
    <>
      <div className="form__problem">
        <Nav />
        <FormTop
          tittle="¿En que dispositivo tienes problemas?"
          parragraph="¡Elige entre los problemas más comunes o contáctanos por WhatsApp si no encuentras lo que buscas!"
          current1="form__top-progress-bar-current"
        />
        <form onSubmit={submitHandler} className="form__problem__container">
          <input
            type="checkbox"
            id="PC"
            value="PC"
            checked={categoryName === "PC"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="PC">
            <img src={Desktop} alt="" />
            <span>PC</span>
          </label>

          <input
            type="checkbox"
            id="Laptops"
            value="Laptops"
            checked={categoryName === "Laptops"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="Laptops">
            <img src={Laptop} alt="" />
            <span>Laptops</span>
          </label>

          <input
            type="checkbox"
            id="Celulares"
            value="Celulares"
            checked={categoryName === "Celulares"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="Celulares">
            <img src={Phone} alt="" />
            <span>Celulares</span>
          </label>

          <input
            type="checkbox"
            id="Perifericos"
            value="Perifericos"
            checked={categoryName === "Perifericos"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="Perifericos">
            <img src={Peripheral} alt="" />
            <span>Periféricos</span>
          </label>

          <input
            type="checkbox"
            id="Componentes"
            value="Componentes"
            checked={categoryName === "Componentes"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="Componentes">
            <img src={Component_icon} alt="" />
            <span>Otros</span>
          </label>

          <input
            type="checkbox"
            id="Apple"
            value="Apple"
            checked={categoryName === "Apple"}
            onChange={(e) => setCategory(e.target.value)}
          />
          {/* <label htmlFor="Apple">
            <img src={Apple} alt="" />
            <span>Apple</span>
          </label> */}
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
