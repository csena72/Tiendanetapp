import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Los más Vendidos</h2>

      {items.map((x, index) => (
        <Item key={index} item={x} />
      ))}
    </div>
  );
};
