import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GetCategories } from "./helpers/GetCategories";
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
    setTimeout(() => {
      GetCategories().then((items) => {
        setState({
          data: items,
        });
      });
    }, 2000);
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

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider
          value={{ 
            cartState: cartState, 
            addItemToCart: addItem, 
            removeItemFromCart: removeItem,
            removeAllitemsFromCart: clear
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
