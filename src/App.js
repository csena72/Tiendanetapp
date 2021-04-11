import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import firebase from "firebase/app";
import { getFirestore } from './configs/firebase';
import swal from 'sweetalert';
import CartContext from "./contexts/CartContext";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Help } from "./components/Help";
import { Cart } from "./components/Cart";
import "./App.css";

function App() {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    const db = getFirestore();
    const categories = db.collection("categories");

    categories.get().then((querySnapshot) => {
      if(querySnapshot.size === 0){
        console.log('No results!');
      }
      setState({data: querySnapshot.docs.map(doc => doc.data())})
    }).catch((error)=> {
      console.log("Error searching items", error);
    });

  }, []);

  const { data: items } = state;

  const context = useContext(CartContext);

  const [cartState, setCartState] = useState(context);

  const addItem = (item, quantity) => {
    if(cartState.filter(cartState => cartState.item.id === item.id).length){

      let newCartState = cartState.filter(cartState => cartState.item.id !== item.id).concat(
        {
          item: item,
          quantity: cartState[0].quantity + quantity,
        }
      );
      
      setCartState(newCartState)

    } else {
      setCartState([
        ...cartState,
        {
          item: item,
          quantity: quantity,
        }
      ]);
    }
  };

  const removeItem = ( id ) => {    
    setCartState(      
      cartState.filter(cartState => cartState.item.id !== id)      
    );
  }

  const clear = () => {
    setCartState([]);
  }
    
  const db = getFirestore();

  function createOrder(products, total) { 
    const newOrder = {
      buyer: { id: 1, name: "Cris", phone: 1136745563, email: "csena@gmail.com" },
      items: products,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total,
    };

    const orders = db.collection("orders");

    orders.add(newOrder).then((resp) => {      
      swal({
        title: `Su compra se realizó con éxito!`,
        text: `El id de la orden de compra es: ${resp.id}`,
        icon: 'success',
        button: 'Aceptar'
      });
      clear();
    });
  }

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider
          value={{ 
            cartState: cartState, 
            addItemToCart: addItem, 
            removeItemFromCart: removeItem,
            removeAllitemsFromCart: clear,
            createOrder: createOrder
           }}
        >
          <NavBar items={items} />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/itemDetail/:id?" component={ItemDetailContainer} />
            <Route
              path="/itemList/:categoryId?"
              component={ItemListContainer}
            />
            <Route path="/help" component={Help} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
