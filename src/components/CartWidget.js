import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { Button } from 'react-bootstrap';

export function CartWidget() {
  return ( 
    <Link to={"/cart"}>
      <Button variant="outline-info"><MdShoppingCart /> Comprar</Button>
    </Link>   
  );
}
