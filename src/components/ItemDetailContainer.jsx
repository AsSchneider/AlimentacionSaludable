import React, {useEffect} from 'react';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

export default  function ItemDetailContainer (){
    const { iditem } = useParams();
    const [producto , setProducto] = useState({});

    useEffect(() => {
        const db = getFirestore();

        let itemProd = doc(db, "productos", iditem);

        getDoc(itemProd).then((item) => {
            setProducto({ id: item.id, ...item.data() });
        });
      
    }, [iditem]);



  return (
    <Container fluid className="p-4" style={{
        backgroundSize: "cover",
        color: "white",}}>

        <ItemDetail producto={producto} />

    </Container>
  )
}