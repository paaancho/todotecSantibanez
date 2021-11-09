import './item.css';
import ItemCount from '../itemCount/itemCount';
import { Link } from 'react-router-dom';

const Item = ({ product }) =>{
    return (
        <div>
            <div className="item">
            <Link to={`/item/${product.id}`}>
                <img src={product.photo} alt="" />
            </Link>
            <h3>{product.name}</h3>
            <span>${product.price}</span><br />
            <ItemCount stock={product.stock} />
            </div>
        </div>
    );
};

export default Item;