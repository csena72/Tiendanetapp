import { Item } from "./Item";
import { useParams } from "react-router";
import { Row } from 'react-bootstrap'

export const ItemList = ({ items }) => {

  const { categoryId } = useParams();
  console.log(categoryId);

  return (
    <Row>
      {items.map((x, index) => (
        <Item key={index} item={x} />
      ))}
    </Row>
  );
};
