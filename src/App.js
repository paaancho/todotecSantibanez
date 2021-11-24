import './components/navBar/navBar.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Cart from './components/cart/cart';
import { CartContextProvider } from './contexts/cartContext/cartContext';
import CheckoutContainer from './components/checkoutContainer/checkoutContainer';

function App() {

  return (
        <CartContextProvider>
          <BrowserRouter>
            <header className="header">
              <Navbar />
            </header>
            <Switch>
                  <Route exact path="/">
                    <ItemListContainer titleCategory="Productos"/>
                  </Route>
                  <Route exact path="/category/:categoryName">
                    <ItemListContainer titleCategory="Productos"/>
                  </Route>
                  <Route exact path="/item/:itemId">
                    <ItemDetailContainer />
                  </Route>
                  <Route exact path="/cart">
                      <Cart />
                  </Route>
                  <Route exact path="/cart/crear-orden">
                    <CheckoutContainer />
                  </Route>
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
  );
}

export default App;
