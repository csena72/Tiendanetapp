import { useState, useContext } from "react";
import { getFirestore } from "../configs/firebase";
import firebase from "firebase/app";
import CartContext from "../contexts/CartContext";
import { AppRouter } from "../routes/AppRouter";
import Swal from "sweetalert2";

export const CartProvider = () => {
  
  const context = useContext(CartContext);

  const [cartState, setCartState] = useState(context);

  const addItem = (item, quantity) => {
    if (cartState.filter((cartState) => cartState.item.id === item.id).length) {
      let newCartState = cartState
        .filter((cartState) => cartState.item.id !== item.id)
        .concat({
          item: item,
          quantity: cartState[0].quantity + quantity,
        });

      setCartState(newCartState);
    } else {
      setCartState([
        ...cartState,
        {
          item: item,
          quantity: quantity,
        },
      ]);
    }
  };

  const removeItem = (id) => {
    setCartState(cartState.filter((cartState) => cartState.item.id !== id));
  };

  const clear = () => {
    setCartState([]);
  };

  const db = getFirestore();

  function createOrder(products, total) {
    const newOrder = {
      buyer: {
        id: 1,
        name: "Cris",
        phone: 1136745563,
        email: "csena@gmail.com",
      },
      items: products,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total,
    };

    const orders = db.collection("orders");

    orders.add(newOrder).then((resp) => {
      Swal.fire({
        title: `Su compra se realizó con éxito!`,
        text: `El id de la orden de compra es: ${resp.id}`,
        icon: "success",
        button: "Aceptar",
      });
      clear();
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartState: cartState,
        addItemToCart: addItem,
        removeItemFromCart: removeItem,
        removeAllitemsFromCart: clear,
        createOrder: createOrder,
      }}
    >
      <AppRouter />
    </CartContext.Provider>
  );
};
