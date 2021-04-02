import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetProducts } from "../helpers/GetProducts";
import { ItemDetail } from "./ItemDetail";

import { Spinner } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      GetProducts()
        .then((items) => {
          const found = items.filter(function (item) {
            if (id) {
              return item.id === parseInt(id);
            } else {
              return items;
            }
          });
          return found;
        })
        .then((items) => {
          setItem(items[0]);
          setIsLoad(false);
        });
    }, 1000);
  }, [id]);

  return (
    <>
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
        <div>
          <h2>Detalle del producto {id}</h2>
          <ItemDetail key={item.id} item={item} />
        </div>
      )}
    </>
  );
};
