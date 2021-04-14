import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getFirestore } from "../configs/firebase";
import { ItemDetail } from "./ItemDetail";
import Swal from "sweetalert2";

import { Spinner } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const history = useHistory();
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
          Swal.fire({
            title: `error`,
            text: `No existe un producto con el id: ${id}`,
            icon: "error",
            button: "Aceptar",
          }).then((result) => {
            history.replace('/');
          });
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
      {isLoad && (
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
      )} 
      { !item.length &&(
        <div>
          <h2>Detalle del producto {id}</h2>
          <ItemDetail key={item.id} item={item} />
        </div>
      )}
    </>
  );
};
