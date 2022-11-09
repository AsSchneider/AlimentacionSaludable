import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import image from "../img/logo.jfif";
import CartWidget from "./CartWidget";




export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <img src={image} alt="" className="logo"/>
          <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
              <Link to="/Checkout">Checkout</Link>
            </li>
            <li>
               <Link to="/contacto">Contacto</Link>
             </li>
             <li>
               <Link to="category/varios">Veggie</Link>
             </li>
             <li>
               <Link to="category/veggie">Varios</Link>
             </li>
          </ul>

          <CartWidget />
        </div>
      </nav>
    </div>
  );
}
