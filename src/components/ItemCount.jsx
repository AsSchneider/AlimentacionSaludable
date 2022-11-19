import React, { useState } from 'react';

export default function Counter() {
  const [ counter, setCounter] = useState (0)
  return (
    <>
    <h3>Counter: {counter}</h3>
    <button onClick={()=>{
      setCounter(counter + 1)
    }}>Sumar
    </button>
    <button onClick={ ()=>{
      setCounter (counter - 1)
    }}>
      Restar
    </button>
    </>
  )
}
