import './navbar.css';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const stylesIconShopping = {
        marginRight : '5px',
        color : '#34495e'
    };

    return (
        <div className="container">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h3>todoTec</h3>
            </div>
            <div className="navegation">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Sobre Nosotros</a></li>
                    <li><a href="/#">Tienda</a></li>
                    <li><a href="/#">Contacto</a></li>
                    <li id="shoppingCart"><a href="/#">
                            <FontAwesomeIcon icon={faShoppingCart} style={stylesIconShopping}/>
                            Carrito
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;