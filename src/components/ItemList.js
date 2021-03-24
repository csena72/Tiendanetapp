import { Item } from "./Item";
import { Row } from 'react-bootstrap'

export const ItemList = ({ items }) => {

  return (
    <Row>
      {items.map((x, index) => (
        <Item key={index} item={x} />
      ))}
    </Row>
  );
};
