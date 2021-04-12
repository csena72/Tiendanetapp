import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../configs/firebase";
import { ItemDetail } from "./ItemDetail";

import { Spinner } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const products = db.collection("items");
    const item = products.doc(id);

    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Item does not exist!");
          return;
        }
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setIsLoad(false);
      });
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
