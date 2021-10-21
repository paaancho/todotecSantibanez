import './navBar.css';
import logo from './logo.svg';
import CartWidget from '../cartWidget/cartWidget';

const Navbar = () => {
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
                    <li id="shoppingCart">
                        <CartWidget itemCounter="3"/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;