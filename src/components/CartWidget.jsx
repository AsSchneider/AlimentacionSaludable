import React from "react";

import { FaShoppingCart } from "react-icons/fa";

export default function CartWidget() {
  return (
    <button onClick={() => alert("Hola Coder")}>
      <FaShoppingCart />
    </button>
  );
}
