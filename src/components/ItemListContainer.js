import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../configs/firebase";
import { ItemList } from "./ItemList";
import { Container, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    let products = db.collection("items");

    if (categoryId) {
      const filterCategory = products.where(
        "categoryId",
        "==",
        parseInt(categoryId)
      );
      products = filterCategory;
    }

    products
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          Swal.fire({
            text: `No se encontraron resultados`,
            icon: "info",
            confirmButtonText: "Aceptar",
          });
          //TODO: redirect al /
        }
        const items = querySnapshot.docs.map((doc) => [
          { id: doc.id, ...doc.data() },
        ]);
        setItems(items.map((index) => index[0]));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setIsLoad(false);
      });
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
