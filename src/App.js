import './components/navBar/navBar.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Cart from './components/cart/cart';
import CartContext from './components/contexts/cartContext/cartContext';
import { useState } from 'react/cjs/react.development';

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
      <CartContext.Provider value={cartItems}>
        <BrowserRouter>
          <header className="header">
            <Navbar />
          </header>
          <Switch>
              <>
                <Route exact path="/">
                  <ItemListContainer titleCategory="Productos"/>
                </Route>
                <Route exact path="/category/:categoryId">
                  <ItemListContainer titleCategory="Productos"/>
                </Route>
                <Route exact path="/item/:itemId">
                  <ItemDetailContainer />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                  </Route>
              </>
            </Switch>
          </BrowserRouter>
      </CartContext.Provider>
  );
}

export default App;
