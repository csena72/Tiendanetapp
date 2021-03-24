import { useState } from "react";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import {FaTruck} from 'react-icons/fa'

export const Item = ({ item }) => {


  const [stockActual, setStockActual] = useState(item.stock);

  const restarStock = (e, nuevoStock) => {
    e.preventDefault();
    
    setStockActual((stockActual) => stockActual - nuevoStock);
  };

  return (
    <Card style={{ width: '14rem' }}>      
      <Link to={"/itemDetail/" + item.id}><Card.Img variant="top" src={item.pictureUrl} /></Link>
      <Card.Body>
        <hr/>       
      <Link to={"/itemDetail/" + item.id}><Card.Title >{item.title}</Card.Title></Link>        
      
        <FaTruck /> 
        <Card.Text className="float-right">          
          $ {item.price}          
        </Card.Text> 
        <ItemCount stock={stockActual} initial={1} onAdd={restarStock} />
      </Card.Body>
    </Card>
  );
};
