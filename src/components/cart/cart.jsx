import { useEffect, useState } from "react";
import { useCartContext } from "../contexts/cartContext/cartContext";
import Loader from "../loader/loader";
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
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio Unitario</th>
                                <th>Total</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            cartItems ? 
                                cartItems.map((item) => (
                                    <tr key={item.name}>
                                        <td>{item.name}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.price}</td>
                                        <td>{item.price * item.cantidad}</td>
                                        <td><button onClick={() => removeItem(item.id)}>Eliminar</button></td>
                                    </tr>
                                ))
                            : <Loader />
                        }
                        </tbody>
                    </table>
                    {cartItems.length > 0 ? <button tpye="button" onClick={clearCart}>Vacíar Carrito</button> : <h3 Style="text-align:center;">Carrito Vacío</h3>}
                </div>
        </>
    )
}

export default Cart;