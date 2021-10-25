import ItemCount from '../itemCount/itemCount';
import './item.css';

const Item = ({product}) =>{
    return (
        <div className="item">
            <img src={product.photo} alt="" />
            <h3>{product.name}</h3>
            <span>${product.price}</span><br />
            <ItemCount stock={product.stock} />
            <div className="cartAdd">
                <button>Añadir al Carrito</button>
            </div>
        </div>
    );
};

export default Item;