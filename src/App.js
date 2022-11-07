import React from "react";

import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola React" />
      {
        //* Esta forma es mejor
      }
      {
        //* Esto esta duplicado! <ItemListContainer greeting="Espero que seas facil!" />
      }
      <Footer />
    </div>
  );
}

export default App;
