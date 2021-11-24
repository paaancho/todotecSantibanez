import './navBar.css';
import logo from './logo.svg';
import CartWidget from '../cartWidget/cartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                        <h3>todoTec</h3>
                    </Link>
                    <FontAwesomeIcon icon={faBars} id="hambuguerIcon"/>
                </div>
            <div className="navegation">
                <ul>
                    <li>
                        <NavLink to="/">
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/componentes">
                            Componentes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/perifericos">
                            Periféricos
                        </NavLink>
                    </li>
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