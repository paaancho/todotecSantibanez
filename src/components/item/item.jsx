import './item.css';
import ItemCount from '../itemCount/itemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import swal from 'sweetalert';
import { useCartContext } from '../../contexts/cartContext/cartContext';

const Item = ({ product }) =>{
    const cartConsumer = useCartContext();
    const [visibilityOnCart, setVisibilityOnCart] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [counterItem, setCounterItem] = useState(0);

    const onCartAdd = (data) =>{
        if(data > 0){
            if(!cartConsumer.isInCart(product)){
                setVisibilityOnCart(false);
                setCounterItem(data);
                product['cantidad'] = data;
                cartConsumer.addItem(product);
            }else{
                const updateItem = cartConsumer.updateItem(product.id, data)
                if(updateItem.estado){
                    swal({
                        icon : 'success',
                        title: 'Producto actualizado',
                        text:`La cantidad a sido actualizada a: ${updateItem.nuevaCantidad} producto(s)`
                    })
                    setCounterItem(data);
                    setVisibilityOnCart(false);
                }
            }
        }else{
            swal({
                title: 'No hay stock disponible',
                icon: 'error'
            });
        }
    }
    
    return (
        <div>
            <div className="item">
            <Link to={`/item/${product.id}`}>
                <img src={product.photo} alt="" />
            </Link>
            <h3>{product.name}</h3>
            <span>${product.price}</span><br />
            {
                        visibilityOnCart ? 
                        <ItemCount stock={product.stock} cartAdd={onCartAdd}/> 
                        : <Link to="/cart"><button id="btnGoCart">Ir al carrito</button></Link>
                    }
            </div>
        </div>
    );
};

export default Item;