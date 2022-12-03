
import React from "react";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

function ItemListContainer (){

    const { idcategoria } = useParams();

    const [prod, setProd] = useState([]);

   useEffect(() => {
    const db = getFirestore();
    let producto;

    idcategoria 
    ? producto = query(collection(db, "producto"), where("categoria", "==", idcategoria))
    : producto = collection(db , "producto");

    getDocs(producto).then((res) => {
        const arrayDeProducto = res.docs.map(producto => {
        return {
            id: producto.id , ...producto.data()
        }
    })
    setProd(arrayDeProducto);
})
    
}, [idcategoria]) 


    return (
        <Container fluid className="p-2" style={{
            backgroundSize: "cover",
            color: "white"}}>

            <div className="text-center">
                <ItemList items={prod} idcategoria={idcategoria} />  
            </div>
        </Container>
    );
}

export default ItemListContainer;

