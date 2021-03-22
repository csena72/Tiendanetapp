import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetItems } from "../helpers/GetItems";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    setTimeout(() => {
      GetItems().then((items) => {
        setState({
          data: items[id - 1],
        });
      });
    }, 2000);
  });

  const { data: item } = state;

  return (
    <div>
      <h2>Detalle del producto {id}</h2>
      <ItemDetail key={id} item={item} />
    </div>
  );
};
