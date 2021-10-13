import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const stylesIconShopping = {
    marginRight : '3px',
    color : '#34495e'
};

const CartWidget = (props) =>{
    return (
        <a href="/#">
            <FontAwesomeIcon icon={faShoppingCart} style={stylesIconShopping} />
            <span className="itemCounter">{props.itemCounter}</span>
        </a>
    )
}

export default CartWidget