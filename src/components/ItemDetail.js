
import { Card } from 'react-bootstrap';

export const ItemDetail = ({ item }) => {

  return (
    <Card style={{ width: '15rem', marginTop: '3em' }}>      
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
      <Card.Title>{item.title}</Card.Title>
        <Card.Text>          
          {item.description}          
        </Card.Text>      
        <Card.Text className="float-right">          
          $ {item.price}          
        </Card.Text>            
      </Card.Body>
    </Card>   
  );
};
