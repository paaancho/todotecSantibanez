import './components/navBar/navBar.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

function App() {
  return (
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
          </>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
