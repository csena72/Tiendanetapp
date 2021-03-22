import React from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {
  return (
    <div>
      <img
        src={item.pictureUrl}        
        alt="placeholder"
      />
      <div>
        <h5>{item.title}</h5>
        <p>{item.description}</p>
        <p>$ {item.price}</p>
        <div>
          <Link to={"/"}>
            Volver...
          </Link>
        </div>
      </div>
    </div>
  );
};
