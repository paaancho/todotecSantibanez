import './components/navBar/navBar.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

function App() {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <ItemListContainer titleCategory="Lista de Productos" /> 
        <ItemDetailContainer />
      </main>
    </div>
      
  );
}

export default App;
