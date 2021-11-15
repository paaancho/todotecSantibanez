import { useEffect, useState } from "react";
import { useCartContext } from "../contexts/cartContext/cartContext";
import { Link } from "react-router-dom";
import './cart.css';

const Cart = () => {
    const cartConsumer = useCartContext();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(cartConsumer.getItems());
    }, [cartConsumer])

    const clearCart = () =>{
        cartConsumer.clearCart();
    }

    const removeItem = (itemId) => {
        cartConsumer.removeItem(itemId);
    }

    return(
        <>
            <h2 Style="text-align:center">Finalizar compra</h2>
                <div className="cartContainerDetail">
                    {cartItems.length > 0 ? 
                    <div className="cartDetail">
                            <button id="btnClearCart" tpye="button" onClick={clearCart}>Vacíar Carrito</button> 
                            <table>
                            <thead>
                                <tr>
                                    <th Style="width:35%">Producto</th>
                                    <th col="1">Cantidad</th>
                                    <th col="1">Precio Unitario</th>
                                    <th col="1">Total</th>
                                    <th Style="width:15%">Acción</th>
                                </tr>
                            </thead>
                            <tbody> 
                                    {
                                        cartItems.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className="detail">
                                                        <img src={item.photo} alt="Imagen product" width="100" height="100" />
                                                        <p>{item.name}<br/><span>SKU: 000{item.id}</span></p>
                                                    </div>
                                                </td>
                                                <td>{item.cantidad}</td>
                                                <td>{item.price}</td>
                                                <td>{item.price * item.cantidad}</td>
                                                <td><button id="btnRemoveItem" onClick={() => removeItem(item.id)}>Eliminar</button></td>
                                            </tr>
                                        ))
                                    }
                            </tbody>
                            </table>
                            <div className="totalCart">
                                <p>Total: ${cartConsumer.getTotalCarts()}</p>
                            </div>
                    </div>: 
                    <div className="clearCart">
                        <p>El carrito esta vacío</p>
                        <Link to="/">
                            <button type="button">Ir a comprar</button>
                        </Link>
                    </div>
                    }
                </div>
        </>
    )
}

export default Cart;

