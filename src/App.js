import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GetCategories } from "./helpers/GetCategories";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Help } from "./components/Help";
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

  return (
    <>
      <BrowserRouter>
        <NavBar items={items} />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/itemDetail/:id?" component={ItemDetailContainer} />
          <Route path="/itemList/:categoryId?" component={ItemListContainer} />
          <Route path="/help" component={Help} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
