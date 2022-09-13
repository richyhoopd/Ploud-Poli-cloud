import React from "react";
import {
  Footer,
  FooterLink,
  Bars,
  FooterMenu,
  FooterBtn,
  FooterBtnLink,
} from "./FooterElements";

const Navbar = () => {
  return (
    <>
      <Footer>
        <FooterLink to="/">
          <img
            src={require("../../Assets/ploudlogo.jpg")}
            alt="logo"
            style={{ width: "50px" }}
          />
        </FooterLink>
        <Bars />
        <FooterMenu>
          <a
            href="http://politecnica.sems.udg.mx/contenido/directorio"
            style={{
              color: "#04111D",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              padding: "0 1rem",
              height: "100%",
              cursor: "pointer",
            }}
          >
            Directorio
          </a>
          <a href="http://politecnica.sems.udg.mx/normatividad" style={{
              color: "#04111D",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              padding: "0 1rem",
              height: "100%",
              cursor: "pointer",
            }}>
            Normatividad
          </a>
          <a href="http://politecnica.sems.udg.mx/horarios.php" style={{
              color: "#04111D",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              padding: "0 1rem",
              height: "100%",
              cursor: "pointer",
            }}>
            Horario
          </a>
        </FooterMenu>
        <FooterBtn>
          <FooterBtnLink to="/iniciar">Contactenos</FooterBtnLink>
        </FooterBtn>
      </Footer>
    </>
  );
};

export default Navbar;
