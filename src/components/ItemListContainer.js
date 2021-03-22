import { ItemList } from "./ItemList";

export const ItemListContainer = ({ items }) => {
  return (
    <>
      <div className="container-fluid">
        <ItemList items={items} />
      </div>
    </>
  );
};
