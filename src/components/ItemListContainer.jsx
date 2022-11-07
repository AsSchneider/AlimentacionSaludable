import React from "react";

export default function ItemListContainer({ greeting }) {
  const bodyStyle = { background: "#202020", color: "#fff", padding: "20px" };
  //* STYLE!!
  return (
    <div style={bodyStyle}>
      <h1 style={{ fontWeight: "lighter" }}>
        {greeting} <br /> <br /> Espero que seas facil!
      </h1>
      {
        //* <br />  es para dar un salto de linea
      }
    </div>
  );
}
