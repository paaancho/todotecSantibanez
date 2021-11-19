import './checkoutContainer.css';
import { Link } from 'react-router-dom';

const CheckoutContainer = ({counter}) =>{
    return (
        <div className="checkOutContainer">
            <p><i>Se han añadido {counter} producto(s) al carrito</i></p>
            <Link to="/">
                <button className="btn btnContinueShop">Continuar Comprando</button>
            </Link>
            <Link to="/cart">
                <button className="btn btnGoToCart" Style="margin-left:10px">Ir al carrito</button>
            </Link>
        </div>
    )
}

export default CheckoutContainer;