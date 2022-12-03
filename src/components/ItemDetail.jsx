import React, { useContext,useState } from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import "./estilos/contenedor.css";
import ItemCount from "./ItemCount.jsx";
import { Link } from 'react-router-dom';
import { cartContext } from "./CartContext";


function ItemDetail({ producto }) {
  const [bolsa, setBolsa] = useState(false);

  const {carrito, addItem} = useContext(cartContext);
  console.log(carrito);

  const onAdd  = (cantidad) => {
    console.log(`se agrego ${cantidad} unidades de ${producto.nombre} `);
    addItem(producto, cantidad)
    setBolsa(true)
  }

  return (
    <Container className="text-center cardDetail">
        {producto.id ? (
          <Card style={{ width:'50rem', color:"black" }} className="bg-light">
          <Card.Header as="h5">{producto.categoria} </Card.Header>
          <Row>
            <Col>
              <Card.Img variant="top" src={producto.imgUrl} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title>
                <u className="h3"> {producto.nombre}</u> 
              </Card.Title>
              <Card.Text className='p-2'>
                <Row>
                  <Col>
                    With supporting text below as a natural lead-in to additional content.
                  </Col>
                  <Col>
                    With supporting text below as a natural lead-in to additional content.
                    </Col>
                </Row>
              </Card.Text>
              <Card.Text className='h5'>$ {producto.precio} </Card.Text>
              <Card.Text>Stock ({producto.stock} unidades) </Card.Text>
              </Card.Body>
              <Card.Body>
                {bolsa 
                ? <div>
                  <Link className="btn btn-dark" to="/Cart" >Finalizar Compra</Link>
                  <Link className="btn btn-info text-white" to="/">Seguir Comprando</Link>
                </div>
                : <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} /> }
                </Card.Body>
            </Col>
        </Row> 
        </Card>
            ) : (
                <div className="contenedorLoad">
                    <Spinner animation="border" variant="secondary" className="load" />
                </div>
            )}
    </Container>
  )
}

export default ItemDetail