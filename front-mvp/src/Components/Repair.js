import Desktop from "../Assets/Desktop-icon.png";
import Laptop from "../Assets/Laptop-icon.png";
import Phone from "../Assets/Phone-icon.png";
import Peripheral from "../Assets/Peripheral-icon.png";
import Component_icon from "../Assets/Component-icon.png";
import Apple from "../Assets/Apple-icon.png";
// import { getError } from '../utils';
// import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2';
// import { Store } from '../Store';


export default function Repair() {
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
  const [categoryName] = useState();
  
  const submitHandler = (e) => {
    e.preventDefault();
  //   ctxDispatch({ type: "SAVE_PROBLEM", payload: [problemName] });
    localStorage.setItem("problem", categoryName);
    navigate(`/repara/dispositivo/?category=${categoryName}`);
  };
  return (
    <section className="home__repair">
      {/* <h2>¡Repara tus electrónicos!</h2>
      <div className="home__repair__items" >
      {categories.map((category) => (
          <Link to={`/search?category=${category}`} href="*" className="home__repair__items-item" >
          <img src={Desktop} alt="" />
          <p>{category}</p>
          </Link>
      ))}
        </div> */}
      <h2>¡Repara tus electrónicos!</h2>
      <div className="home__repair__items">
        <Link to={`/repara/pc/?category=PC`} href="*" className="home__repair__items-item" >
          <img src={Desktop} alt="" />
          <p>PC</p>
        </Link>
        <Link to={`/repara/laptop/?category=Laptops`} href="*" className="home__repair__items-item" >
          <img src={Laptop} alt="" />
          <p>Laptops</p>
        </Link>
        <Link to={`/repara/celulares/?category=Celulares`} href="*" className="home__repair__items-item" >
          <img src={Phone} alt="" />
          <p>Celulares</p>
        </Link>
        <Link to={`/repara/lineablanca/?category=Perifericos`} href="*" className="home__repair__items-item" >
          <img src={Peripheral} alt="" />
          <p>Periféricos</p>
        </Link>
        <Link to={`/repara/componentes/?category=componentes`} href="*" className="home__repair__items-item" >
          <img src={Component_icon} alt="" />
          <p>Otros</p>
        </Link>
        {/* <Link to={`/repara/apple/`} href="*" className="home__repair__items-item" >
          <img src={Apple} alt="" />
          <p>Apple</p>
        </Link> */}
      </div>
    </section>
  );
}
