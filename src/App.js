import './components/navBar/navBar.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { useState } from 'react';

function App() {
  const [counterItem, setCounterItem] = useState(1);
  // eslint-disable-next-line
  const [itemStock, setItemStock] = useState(10);

  // Funcion que añade 1 item al carrito
  const itemAdd = () => {
    if(itemStock === 0){
      alert('No hay stock disponible!');
      setCounterItem(0);
    }else{
      if(counterItem < itemStock){
        setCounterItem(counterItem + 1);
      }else{
        alert('No puedes superar el stock disponible')
      }
    }
  }

  // Funcion que remueve 1 item al carrito
  const itemRemove = () => {
    if(itemStock === 0){
      alert('No hay stock disponible!');
    }else{
      if(counterItem > 1){
        setCounterItem(counterItem - 1);
      }else{
        alert('No puedes añadir menos de 1 producto')
      }
    }
  } 

  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <main>
        {/* <ItemListContainer 
          textTitle="Bienvenido a todoTec" 
          stock={itemStock} 
          counter={counterItem} 
          onAdd={itemAdd} 
          onRemove={itemRemove}
        /> */}
      <ItemListContainer titleCategory="Componentes PC" 
          stock={itemStock} 
          counter={counterItem} 
          onAdd={itemAdd} 
          onRemove={itemRemove}
          /> 
      </main>
    </div>
      
  );
}

export default App;
