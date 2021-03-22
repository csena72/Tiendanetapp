import { MdShoppingCart } from "react-icons/md";
import { Button } from 'react-bootstrap';

export function CartWidget() {
  return (    
    <Button variant="outline-info"><MdShoppingCart /> Comprar</Button>
  );
}
