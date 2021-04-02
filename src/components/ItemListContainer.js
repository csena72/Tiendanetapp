import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetProducts } from "../helpers/GetProducts";
import { ItemList } from "./ItemList";
import { Container, Spinner } from "react-bootstrap";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      GetProducts()
        .then((items) => {
          const found = items.filter(function (item) {
            if (categoryId) {
              return item.categoryId === parseInt(categoryId);
            } else {
              return items;
            }
          });
          return found;
        })
        .then((items) => {
          setItems(items);
          setIsLoad(false);
        });
    }, 2000);
  }, [categoryId]);

  return (
    <Container fluid="lg">
      {isLoad ? (
        <div>
          <Spinner
            className="spinner"
            animation="border"
            role="status"
            variant="secondary"
          >
            <span className="sr-only">Cargando...</span>
          </Spinner>
          <p className="textSpinner">Cargando...</p>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </Container>
  );
};
