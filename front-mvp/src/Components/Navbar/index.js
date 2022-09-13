import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../../Store";

const Navbar = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
  };
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../Assets/ploudlogo.jpg')} alt='logo' style={{width: '80px'}}/>
        </NavLink>
        <Bars />
        
        <NavMenu>
          <NavLink to='/' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/tablero' activeStyle>
            Cursos
          </NavLink>
          <NavLink to='/tarea' activeStyle>
            Tareas
          </NavLink>
          
         
        </NavMenu>
        {userInfo ? (

        <NavBtn>
          <NavBtnLink to='/perfil'>{userInfo.name}</NavBtnLink>
          
        </NavBtn>
        ): (
          <NavBtn>
          <NavBtnLink to='/login'>Iniciar sesion</NavBtnLink>
          
        </NavBtn>
        )}
 
      </Nav>
    </>
  );
};

export default Navbar;
