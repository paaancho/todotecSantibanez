import { useEffect, useState } from "react";
import { useCartContext } from "../../contexts/cartContext/cartContext";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './cart.css';

const Cart = () => {
    const cartConsumer = useCartContext();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(cartConsumer.getItems());
    }, [cartConsumer] )

    const clearCart = () =>{
        cartConsumer.clearCart();
    }

    const removeItem = (itemId) => {
        cartConsumer.removeItem(itemId);
    }

    const  descountItem = (itemId) => {
        if(cartConsumer.getCantidad(itemId) > 1){
            cartConsumer.updateItem(itemId, -1);
        }
    }

    const addItem = (itemId) => {
        if(cartConsumer.getCantidad(itemId) < cartConsumer.getStock(itemId)){
            cartConsumer.updateItem(itemId,1);
        }else{
            swal({
                icon: 'info',
                title: 'Superas el limite del stock disponible'
            })
        }
    }

    return(
        <>
            <h2 className="cartTitle">Carrito de compras</h2>
                <div className="cartContainerDetail">
                    {cartItems.length > 0 ? 
                    <div className="cartDetail">
                            <button id="btnClearCart" tpye="button" onClick={clearCart}>Vacíar Carrito</button> 
                            <table>
                            <thead>
                                <tr>
                                    <th style={{width:'35%'}}>Producto</th>
                                    <th col="1">Cantidad</th>
                                    <th col="1">Precio Unitario</th>
                                    <th col="1">Total</th>
                                    <th style={{width:'15%'}}>Acción</th>
                                </tr>
                            </thead>
                            <tbody> 
                                    {
                                        cartItems.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <Link to={`/item/${item.id}`}>
                                                        <div className="detail">
                                                            <img src={item.photo} alt="Imagen product" width="100" height="100" />
                                                            <p>{item.name}<br/><span>SKU: 000{item.id}</span><br/><span>Stock:{item.stock}</span></p>
                                                            
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td className="editCount">
                                                    <button onClick={() => descountItem(item.id)}>-</button>
                                                    <span><label>{item.cantidad}</label></span>
                                                    <button onClick={() => addItem(item.id)}>+</button></td>
                                                <td>${item.price}</td>
                                                <td>${item.price * item.cantidad}</td>
                                                <td><button id="btnRemoveItem" onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrash}/></button></td>
                                            </tr>
                                        ))
                                    }
                            </tbody>
                            </table>
                            <div className="totalCart">
                                <p>Total: ${cartConsumer.getTotalCarts()}</p>
                                <Link to="cart/crear-orden"><button type="button">Ir al checkout</button></Link>
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

