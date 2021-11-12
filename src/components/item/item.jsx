import './item.css';
import ItemCount from '../itemCount/itemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Item = ({ product }) =>{

    const [visibilityOnCart, setVisibilityOnCart] = useState(true);
    const [counterItem, setCounterItem] = useState(0);

    const onCartAdd = (data) =>{
        if(data > 0){
            setVisibilityOnCart(false);
            setCounterItem(data);
        }
    }
    
    return (
        <div>
            <div className="item">
            <Link to={`/item/${product.id}`}>
                <img src={product.photo} alt="" />
            </Link>
            <h3>{product.name}</h3>
            <span>${product.price}</span><br />
            {
                        visibilityOnCart ? 
                        <ItemCount stock={product.stock} cartAdd={onCartAdd}/> 
                        : `${counterItem} Producto(s) añadido al Carrito`
                    }
            </div>
        </div>
    );
};

export default Item;