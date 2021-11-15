import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../contexts/cartContext/cartContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const stylesIconCart = {
    marginRight : '3px',
    color : '#34495e'
};

const CartWidget = (props) =>{
    const cartConsumer = useCartContext();
    const [counterItems, setCounterItems] = useState(0);
    const productItems = cartConsumer.getItems();

    useEffect(() => {
        setCounterItems(productItems.length);
    },[productItems.length])

    return (
        <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} style={stylesIconCart} />
            <span className="itemCounter">{counterItems}</span>
        </Link>
    )
}

export default CartWidget