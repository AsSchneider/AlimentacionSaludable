import React from "react";

import image from "../img/logo.jfif";
import "../App.css";

import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <img src={image} alt="" className="logo" />
          <ul>
            <li>
              <a href="https://www.google.com/">Recetas</a>
            </li>
            <li>
              <a href="https://www.google.com/">Menus</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
}
