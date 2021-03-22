import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";

import { Card } from 'react-bootstrap';

export const Item = ({ item }) => {
  const [stockActual, setStockActual] = useState(item.stock);

  const restarStock = (e, nuevoStock) => {
    e.preventDefault();
    setStockActual((stockActual) => stockActual - nuevoStock);
  };

  const handleClick = () => {
    <Link to={"/itemDetail/" + item.id}><Card.Img variant="top" src={item.pictureUrl} /></Link>
  }

  return (
    <Card style={{ width: '18rem' }}>      
      <Card.Img variant="top" src={item.pictureUrl} onClick={(e) => handleClick(e, item)} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
          <br />
          <br />
          $ {item.price}          
        </Card.Text>
        <ItemCount stock={stockActual} initial={1} onAdd={restarStock} />        
      </Card.Body>
    </Card>
  );
};
