import React, { useState } from "react";

export function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const handleAdd = () => setCounter(counter + 1);
  const handleSubstract = () => setCounter(counter - 1);

  return (
    <>
      <form>
        <div>
          <div>
            <h4>Stock: {stock} </h4>
          </div>

          <div>
            <button
              type="button"
              disabled={stock === 0 || counter < 1}
              onClick={handleSubstract}
            >
              {" "}
              -{" "}
            </button>

            <label type="text">{counter}</label>

            <button
              type="button"
              disabled={stock === 0 || counter > stock || counter === stock}
              onClick={handleAdd}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <div>
            <button
              type="button"
              disabled={counter === 0 || counter > stock}
              onClick={(e) => onAdd(e, counter)}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </form>
    </>
  );
}