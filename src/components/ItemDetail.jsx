import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import "./estilos/contenedor.css";


function ItemDetail({ producto }) {
  return (
    <Container className="text-center cardDetail">
        {producto.id ? (
          <Card style={{ width:'50rem', color:"black" }} className="bg-light">
          <Card.Header as="h5">{producto.categoria} </Card.Header>
          <Row>
            <Col>
              <Card.Img variant="top" src={producto.img} />
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

              <Button>Agregar al carrito</Button>
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