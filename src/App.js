import {BrowserRouter, Switch, Route} from 'react-router-dom';
import  NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Help } from './components/Help'
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ItemListContainer} /> 
          <Route path ='/itemDetail/:id?' component = { ItemDetailContainer } />
          <Route path='/itemList/:categoryId?' component={ItemListContainer} />
          <Route path='/help' component={Help} />    
        </Switch>
      </BrowserRouter>
    </>    
  );
}

export default App;

