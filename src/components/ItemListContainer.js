import { ItemList } from "./ItemList";
import { Container } from 'react-bootstrap'

export const ItemListContainer = ({ items }) => {
  return (
    <Container fluid="lg">
        <ItemList items={items} />
    </Container>    
  );
};
