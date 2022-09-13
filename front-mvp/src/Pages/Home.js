import "../Styles/home.scss";
import { Helmet } from "react-helmet-async";
import { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Swal from "sweetalert2";
import Hero from '../Components/Hero'
import Beneficios from "../Components/Beneficios";



const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function Home() {


  Swal.fire({
    title: 'Bienvenido a Ploud!',
    width: 600,
    padding: '3em',
    color: '#716add',
    text: 'Se responsable con tu tarea, disfruta :)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  })
  return (
    <div className="home">
      <Helmet>
        <title>Ploud</title>
        <meta property="og:image" content={"../../public/images/metach.jpg"} />
      </Helmet>
      <Hero/>
      <Beneficios/>
    </div>
  );
}
