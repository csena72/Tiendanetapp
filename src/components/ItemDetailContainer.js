import { useEffect, useState} from "react";
import { useParams } from "react-router";
import { GetProducts } from "../helpers/GetProducts";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      GetProducts()
          .then((items) => {
            const found = items.filter(
              function (item) {
                if (id) {
                  return item.id === parseInt(id);
                } else {
                  return items;
                }
              }
            );
            return found                              
          })
            .then(items => {
                setItem(items[0]);
            })
    }, 1000);
}, [])  

  return (
    <div>
      <h2>Detalle del producto {id}</h2>
      <ItemDetail key={id} item={item} />
    </div>
  );
};
