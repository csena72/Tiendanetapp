import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const Item = ({ item }) => {
  const [stockActual, setStockActual] = useState(item.stock);

  const restarStock = (e, nuevoStock) => {
    e.preventDefault();
    setStockActual((stockActual) => stockActual - nuevoStock);
  };

  return (
    <div>
      <img
        src={item.pictureUrl}        
        alt="placeholder"
      />
      <div>
        <h5>{item.title}</h5>
        <ItemCount stock={stockActual} initial={1} onAdd={restarStock} />
        <div>
          <Link to={"/itemDetail/" + item.id}>
            Ver detalle...
          </Link>
        </div>
      </div>
    </div>
  );
};
