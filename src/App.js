import './components/navBar/navBar.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';


function App() {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <ItemListContainer titleCategory="Componentes PC" /> 
      </main>
    </div>
      
  );
}

export default App;
