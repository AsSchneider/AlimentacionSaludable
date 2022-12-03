import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function ItemCount ({ initial, stock, onAdd}) {
  const [count, setCount] = useState(initial);

  const sumar = () =>{
      setCount(count +1);
  }

  const resta = () =>{
      setCount(count -1)
  }

  return (
    <ButtonGroup aria-label="Basic example">
    <Button variant="secondary" onClick={sumar} disabled={count >= stock}> + </Button>
    <div className="h3" style={{color:"black", width:"40px", height:"20px"}}> {count} </div>
    <Button variant="secondary" onClick={resta} disabled={count <= 1} > - </Button>
    <Button variant="secondary" onClick={()=> onAdd(count < stock)} disabled={stock = 0}> AGREGAR </Button>
  </ButtonGroup>

  )
}
