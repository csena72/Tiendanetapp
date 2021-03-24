import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetProducts } from "../helpers/GetProducts";
import { ItemList } from "./ItemList";
import { Container } from 'react-bootstrap'

export const ItemListContainer = () => {

  const { categoryId } = useParams();
  const [items, setItems] = useState([]); 

  useEffect(() => {
      setTimeout(() => {
        GetProducts()
            .then((items) => {
              const found = items.filter(
                function (item) {                  
                  if (categoryId) {                    
                    return item.categoryId === parseInt(categoryId);
                  } else {
                    return items;
                  }
                }
              );
              return found                              
            })
              .then(items => {
                  setItems(items)
              })
      }, 2000);
  })
  
  return (
    <Container fluid="lg">
        <ItemList items={items} />
    </Container>    
  );
};
