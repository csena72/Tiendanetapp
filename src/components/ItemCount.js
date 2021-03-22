import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  Alert

} from 'react-bootstrap';

export function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const handleAdd = () => setCounter(counter + 1);
  const handleSubstract = () => setCounter(counter - 1);

  return (
    <>
      <Alert variant="secondary">
        <h6>Stock: {stock} </h6>
      
      <ButtonGroup aria-label="Basic example">
        <Button 
          variant="secondary"
          size="sm"
          onClick={handleSubstract}
          disabled={ stock === 0 || counter < 1 }
        > 
          - 
        </Button>
        <Button 
          variant="secondary"
          size="sm"
          disabled={true}
        >
          {counter}
        </Button>
        <Button 
          variant="secondary"
          size="sm"
          onClick={handleAdd}
          disabled={ stock === 0 || counter > stock || counter === stock }
        > 
         + 
        </Button>
      </ButtonGroup>
      </Alert>
      <Button 
      variant="secondary"
      size="sm"
      block
      disabled={ counter === 0 || counter > stock }
      onClick={(e) => onAdd(e, counter)}
      >
      Agregar al Carrito
      </Button>
    </>
  );
}