import { useState, useContext } from "react";
import CartContext from '../contexts/CartContext';
// import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "react-bootstrap";

export function ItemCount({ stock, initial, onAdd, item }) {

  
  const [counter, setCounter] = useState(initial);  

  const context = useContext(CartContext);
  
  const handleAdd = () => setCounter(counter + 1);
  const handleSubstract = () => setCounter(counter - 1);


  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button
        style={{ paddingRight: "3em" }} 
        variant="secondary" 
        size="sm" 
        disabled={true}
        >
         Stock:  {stock} </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={handleSubstract}
          disabled={stock === 0 || counter < 1}
        >
          -
        </Button>
        <Button variant="secondary" size="sm" disabled={true}>
          {counter}
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={handleAdd}
          disabled={stock === 0 || counter > stock || counter === stock}
        >
          +
        </Button>
      </ButtonGroup>

      <Button
        style={{ marginTop: "0.3em" }}
        variant="secondary"
        size="sm"
        block
        disabled={counter === 0 || counter > stock}
        onClick={(e) => {onAdd(e, counter)}}
      >
        Agregar al Carrito
      </Button>
      {/* <Link to={"/cart"} className="abtn"> */}
      { stock < item.stock && (
              <Button
                style={{ marginTop: "0.3em" }}
                variant="success"
                size="sm"
                block                
                onClick={() => context.addItemToCart( item, counter )}                          
              >Termina tu compra
      </Button>
      )}
      {/* </Link> */}
    </>
  );
}
