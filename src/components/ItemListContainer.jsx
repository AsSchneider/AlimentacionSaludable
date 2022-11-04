import React from 'react'

export default function ItemListContainer({greeting}) {
  const bodyStile ={ background: "#202020", color: "#fff", padding: "20px" };
  return (
    <div style={ bodyStile}>
      <h1 style={ {fontWeight: "lighter"}}>{greeting}</h1>
    </div>
  )
}
