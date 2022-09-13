import FormTop from "../Components/FormTop";
import Nav from "../Components/Nav";
import "../Styles/form__device.scss";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';



export default function FormDevice() {
  const navigate = useNavigate();


  // const { state } = useContext(Store);
  // const { filt } = state;

  const [brand, setBrand] = useState('');
  const [line, setLine] = useState('');
  const [model, setModel] = useState('');
  const part = localStorage.getItem("problem");
  const category = localStorage.getItem("category");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search?category=${category}&brand=${brand}&line=${line}&model=${model}&part=${part}`);
  };

  // const navigate = useNavigate();
  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const {
  //   fullBox,
  //   userInfo,
  //   filt: { device },
  // } = state;
  // const [brand, setBrand] = useState(device.brand || '');
  // const [line, setLine] = useState(device.line || '');
  // const [model, setModel] = useState(device.model || '');
  // const part = filt.problem;
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   ctxDispatch({
  //     type: 'SAVE_DEVICE_DETAILS',
  //     payload: {
  //       brand,
  //       line,
  //       model
  //     },
  //   });
  //   localStorage.setItem(
  //     'shippingAddress',
  //     JSON.stringify({
  //       brand,
  //       line,
  //       model
  //     })
  //   );
  //   navigate(`/search?category=Celulares&brand=${brand}&line=${line}&model=${model}&part=${part}`);
  // };
  return (
    <>
      <div className="form__device">
        <Nav />
        <FormTop
          tittle="Características adicionales"
          parragraph="Danos más detalles de tu dispositivo para poder brindarte la mejor seguridad"
          current3="form__top-progress-bar-current"
        />
        <form onSubmit={submitHandler} className="form__device__form">
        {category === "Celulares" ? (
          <select id="marca" onChange={(e) => setBrand(e.target.value)}>
          <option value="Huawei">Huawei</option>
          <option value="ZTE">ZTE</option>
          <option value="Motorola">Motorola</option>
          <option value="Samsung">Samsung</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Apple">Apple</option>
          <option value="OnePlus">OnePlus</option>
          <option value="LG">LG</option>
          <option value="Casio">Casio</option>
          <option value="BlackBerry">BlackBerry</option>
          <option value="Google">Google</option>
          <option value="Sony">Sony</option>
          <option value="Lanix">Lanix</option>
          <option value="Oppo">Oppo</option>
          <option value="Nokia">Nokia</option>

        </select>
        ) : category === "Laptops" ? (
          <select id="marca" onChange={(e) => setBrand(e.target.value)}>
          <option value="Hp">Hp</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Apple">Apple</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Dell">Dell</option>
          <option value="Huawei">Huawei</option>
          <option value="Alienware">Alienware</option>
          <option value="Toshiba">Toshiba</option>
          <option value="MSI">MSI</option>
          <option value="Sony">Sony</option>
          <option value="Acer">Acer</option>
          <option value="Samsung">Samsung</option>
          <option value="Gateway">Gateway</option>
          <option value="Razer">Razer</option>


        </select>
        ) : category === "PC" ? (
          <select id="marca" onChange={(e) => setBrand(e.target.value)}>
          <option value="Hp">Hp</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Apple">Apple</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Dell">Dell</option>
          <option value="Alienware">Alienware</option>
          <option value="Acer">Acer</option>
          <option value="MSI">MSI</option>
          <option value="La arme yo">La arme yo</option>
        </select>
        ) : category === "Apple" (
          <select id="marca" onChange={(e) => setBrand(e.target.value)}>
          <option value="Apple">Apple</option>
         
        </select>
        ) }
          
          {category === 'Celulares' && brand === 'Apple' ? (
            <select id="Linea" onChange={(e) => setLine(e.target.value)}>
               <option value="Seleccione una opcion">Seleccione una opcion</option>
               <option value="iPhone">iPhone</option>
               <option value="iPad">iPad</option>
            </select>
          ) : category === 'Celulares' && brand === 'Samsung' ? (
            <select id="Linea" onChange={(e) => setLine(e.target.value)}>
               <option value="Seleccione una opcion">Seleccione una opcion</option>

               <option value="Galaxy">Galaxy</option>
            </select>
          ) : category === 'Celulares' && brand === 'Huawei' ? (
            <select id="Linea" onChange={(e) => setLine(e.target.value)}>
               <option value="Seleccione una opcion">Seleccione una opcion</option>

            <option value="P">P</option>
            <option value="Nova">Nova</option>
            <option value="Y">Y</option>
            <option value="Mate">Mate</option>
         </select>
          ) : category === 'Celulares' && brand === 'Motorola' ? (
            <select id="Linea" onChange={(e) => setLine(e.target.value)}>
            <option value="Seleccione una opcion">Seleccione una opcion</option>

         <option value="Moto">Moto</option>
         <option value="one">One</option>
      </select>
          ) : (
            <input type="text" placeholder="Línea" onChange={(e) => setLine(e.target.value)}/>
          )}
         
         {category === 'Celulares' && brand === 'Apple' && line === 'iPhone' ? (
            <select id="Modelo" onChange={(e) => setModel(e.target.value)}>
               <option value="7">7</option>
               <option value="7 Plus">7 Plus</option>
               <option value="8">8</option>
               <option value="8">8 Plus</option>
               <option value="X">X</option>
               <option value="XS">XS</option>
               <option value="XS Pro">XS Pro</option>
               <option value="XS Max">XS Max</option>
               <option value="11">11</option>
               <option value="11 Pro">11 Pro</option>
               <option value="11 Pro Max">11 Pro Max</option>
               <option value="SE">SE</option>
               <option value="12">12</option>
               <option value="12 Mini">12 Mini</option>
               <option value="12 Pro">12 Pro</option>
               <option value="12 Pro Max">12 Mini</option>
               <option value="13">13</option>
               <option value="13 Pro">13 Pro</option>
               <option value="13 Pro Max">13 Pro Max</option>
            </select>
          ) : category === 'Celulares' && brand === 'Samsung' && line === 'Galaxy' ? (
            <select id="Modelo" onChange={(e) => setModel(e.target.value)}>
              <option value="S6">S6</option>
               <option value="S6 EDGE">S6 EDGE</option>
               <option value="S7">S7</option>
               <option value="s7 edge">s7 edge</option>
               <option value="S8">S8</option>
               <option value="S9">S9</option>

               <option value="A32">A30</option>
               <option value="A32">A31</option>
               <option value="A32">A32</option>
               <option value="A32">A20</option>
               <option value="A32">A21</option>
               <option value="A32">A21s</option>
               <option value="A32">A23</option>
               <option value="A32">A10</option>
               <option value="A32">A10s</option>
               <option value="A32">A11</option>

               <option value="A32">A10</option>
               <option value="A32">A10s</option>
               <option value="A32">A20</option>
               <option value="A32">A11</option>
               <option value="A32">A30</option>
               <option value="A32">A21s</option>
               <option value="A32">A31</option>
               <option value="A32">A32</option>

               <option value="A32">M11</option>

            </select>
          ) : category === 'Celulares' && brand === 'Huawei' && line === 'P' ? (
            <select id="Modelo" onChange={(e) => setModel(e.target.value)}>
            <option value="20 Lite">20 Lite</option>
            <option value="30 Lite">30 Lite</option>
            <option value="40 Lite">40 Lite</option>
            <option value="Smart 2021">Smart 2021</option>
            <option value="Smart Z">Smart Z</option>
            <option value="20">20</option>
         </select>
          ) : category === 'Celulares' && brand === 'Huawei' && line === 'Y' ? (
            <select id="Modelo" onChange={(e) => setModel(e.target.value)}>
            <option value="9 2019">9 2019</option>
            <option value="9s">9s</option>
            <option value="8s">8s</option>
            <option value="7a">7a</option>
            <option value="Smart Z">Smart Z</option>
            <option value="20">20</option>
            </select>
          ) : category === 'Celulares' && brand === 'Huawei' && line === 'Nova' ?(
            <select id="Modelo" onChange={(e) => setModel(e.target.value)}>
            <option value="5T">5T</option>
            </select>
          ) : category === 'Celulares' && brand === 'Huawei' && line === 'Mate' ? (
            <select id="Modelo" onChange={(e) => setModel(e.target.value)}>
            <option value="10">10</option>
            </select>
          ) : category === 'Celulares' && brand === 'Motorola' && line === 'Moto' ? (
            <select id="Modelo" onChange={(e) => setModel(e.target.value)}>
            <option value="G6">G6</option>
            <option value="G6">G9</option>
            <option value="G6">G10</option>
            <option value="G6">G 30</option>
            <option value="G6">G 60</option>
            <option value="G6">G Pro</option>
            <option value="G6 Play">G6 Play</option>
            <option value="G6 Plus">G6 Plus</option>
            <option value="G6">G7 Power</option>
            <option value="G6">G7 Play</option>
            <option value="G6">G7 Plus</option>
            <option value="G6">G8 Power</option>
            <option value="G6">G8 Play</option>
            <option value="G6">G7 Plus</option>
            </select>
          ) : category === 'Celulares' && brand === 'Motorola' && line === 'One' ? (
            <select id="Modelo" onChange={(e) => setModel(e.target.value)}>
            <option value="Zoom">Zoom</option>
            </select>
          ) : (
            <input type="text" placeholder="Modelo" onChange={(e) => setModel(e.target.value)}/>
          )}

          {/* <input type="text" placeholder="Modelo" onChange={(e) => setModel(e.target.value)}/> */}
          <input type="text" placeholder="Número de serie (opcional)" />
          
          <button type="submit" >Continuar</button>
          <a
            className="cotiza"
            href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20acerca%20de%20como%20reparar%20con%20chipsi."
          >
            Cotiza por WhatsApp
          </a>
        </form>
      </div>
      <Footer />
    </>
  //   <form
  //   type="text"
  //   name="q"
  //   id="q"
  //   onChange={(e) => setQuery(e.target.value)}
  //   placeholder="Buscar servicios..."
  //   aria-describedby="button-search"
  //   onSubmit={submitHandler}
  // >
  //    <button variant="outline-primary" type="submit" id="button-search">
  //   <i className="fas fa-search"></i>
  // </button>
  // </form>
  );
}
