import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import image from "../img/logo.jfif";
import CartWidget from "./CartWidget";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function Navegador() {
  return (
    <Navbar expand="lg" variant="dark" style={{backgroundColor: "grey"}} >
      <Container fluid>
        <Navbar.Brand>
          <Link to={`/`}><img src={image} alt="Logo del site" className="logo" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end text-center">
          <Nav>
            <Link className="nav-link" to={`/`}>Inicio</Link>
            <Link className="nav-link" to={`/contacto`}>Contacto</Link>
            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <Link className="nav-item dropdown dropdown-item" to={`/categoria/veggie`}>Veggie</Link>  
              <Link className="nav-item dropdown dropdown-item" to={`/categoria/varios`}>Varios</Link>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;
