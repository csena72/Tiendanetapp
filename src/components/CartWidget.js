import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { Button, Badge } from 'react-bootstrap';

export function CartWidget() {

  const context = useContext(CartContext);

  const handleQty = () =>{
    if(!context.cartState.length) {
      return 0;
    }
    const qtys = context.cartState.map( product => {
      return product.quantity;
    });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return qtys.reduce(reducer);
  }

  return ( 
    <>
    { handleQty() > 0 && (
    <Link to={"/cart"}>
      <Button variant="outline-info"><MdShoppingCart />
        Carrito <Badge variant="light">{ handleQty() }</Badge>
       </Button>
    </Link>
    )}
    </>   
  );
}
