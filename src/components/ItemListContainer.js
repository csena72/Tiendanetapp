import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetItems } from "../helpers/GetItems";
import { ItemList } from "./ItemList";
import { Container } from 'react-bootstrap'

export const ItemListContainer = () => {

  const { categoryId } = useParams();  

  const [items, setItems] = useState([]);    

  useEffect(() => {
      setTimeout(() => {
          GetItems()
            .then((items) => {
              const found = items.filter(
                function (item) {
                  
                  if (categoryId) {                    
                    return item.categoryId == categoryId;
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
  }, [])
  
  return (
    <Container fluid="lg">
        <ItemList items={items} />
    </Container>    
  );
};
