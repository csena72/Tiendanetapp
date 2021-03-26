import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import {FaTruck} from 'react-icons/fa'

export const Item = ({ item }) => {


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
      </Card.Body>
    </Card>
  );
};
