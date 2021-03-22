import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { useEffect, useState } from "react";
import { GetItems } from "./helpers/GetItems";
import  NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import './App.css';

function App() {

  const [state, setState] = useState({
    data: []
  });    

  useEffect(() => {
      setTimeout(() => {
          GetItems()
              .then(items => {
                  setState({
                      data: items
                  })
              })
      }, 2000);
  }, [])

  const { data:items } =  state;

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path ='/'>
            <ItemListContainer items={items} />
          </Route> 
          <Route path ='/itemDetail/:id?' component = { ItemDetailContainer } />          
        </Switch>
      </BrowserRouter>
    </>    
  );
}

export default App;

