import React from 'react'
import { useState} from 'react';
import "./ItemListContainer";
import { useParams } from 'react-router-dom'; 
import { useEffect } from 'react';

export default function ItemDetailContainer({greeting}) {

  const {iditem} = useParams ();

  const [productos, setProductos]= useState([]);
  let productosHC=[
  {id:100, name:"Ensalada Cesar", category: "veggie", precio: 950},
  {id:110, name: "Ensalada Italiana", catergory: "veggie", precio: 770},
  {id:120, name: "Ensalada Libre", category: "veggie", precio: 790},
  {id:130, name:"Ensalada Argenta", catergory: "veggie", precio: 770},
  {id:200, name:"Calzone Carne", catergory: "varios", precio: 1350},
  {id:210, name:"Calzone Pollo", catergory: "varios", precio: 1330},
  {id:220, name:"Calzone Cerdo", catergory: "varios", precio: 1340},
];

useEffect(() => {
  const productosPromise = new Promise((res, rej)=>{
    setTimeout(()=>{
      res(productosHC.find((item) => item.id == iditem));
    
    }, 2000);
    });
    productosPromise.then((res) => {

      setProductos(res);
});
}, [iditem]);




  return (
    <div>
      {!productos.length && "Loadding..."}
      {productos.map((item) => (
      <>{JSON.stringify(item)}</>
      ))}
    </div>
    );
  }