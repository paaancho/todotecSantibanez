import { useState } from "react";
import ItemCount from "../itemCount/itemCount";
import './itemDetail.css';
import CheckoutContainer from "../checkoutContainer/checkoutContainer";
import { useCartContext } from "../contexts/cartContext/cartContext";
import swal from 'sweetalert';




const ItemDetail = ({productDetail}) =>{
    const cartConsumer = useCartContext();
    const [visibilityOnCart, setVisibilityOnCart] = useState(true);
    const [counterItem, setCounterItem] = useState(0);

    const onCartAdd = (data) =>{
        if(data > 0){
            if(!cartConsumer.isInCart(productDetail)){
                setVisibilityOnCart(false);
                setCounterItem(data);
                productDetail['cantidad'] = data;
                cartConsumer.addItem(productDetail);
            }else{
                swal({
                    icon : 'info',
                    title: 'Este producto ya esta añadido al carrito'
                })
            }
        }
    }

    return(
        <>
            <h1 id="titleDetail">Detalle del Producto</h1>
            <div className="ItemDetail">
                <div className="imgProduct">
                    <img src={productDetail.photo} alt={productDetail.name} />
                </div>
                <div className="description">
                    <h2>{productDetail.name}</h2>
                    <p className="descriptionProduct">{productDetail.description}</p>
                    <h3>Precio: ${productDetail.price}</h3>
                    {
                        visibilityOnCart ? 
                        <ItemCount stock={productDetail.stock} cartAdd={onCartAdd}/> 
                        : <CheckoutContainer counter={counterItem}/>
                    }
                </div>
            </div>
        </>
    )
}

export default ItemDetail;