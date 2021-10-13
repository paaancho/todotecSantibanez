import './components/navbar/navbar.css';
import Navbar from './components/navbar/navbar.jsx';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer.jsx';

function App() {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <ItemListContainer textTitle="Bienvenido a todoTec" />
      </main>
    </div>
      
  );
}

export default App;
