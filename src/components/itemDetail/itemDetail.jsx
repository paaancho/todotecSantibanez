import { useState } from "react";
import ItemCount from "../itemCount/itemCount";
import './itemDetail.css';
import CheckoutContainer from "../checkoutContainer/checkoutContainer";
import { useCartContext } from "../../contexts/cartContext/cartContext";
import swal from 'sweetalert';
import { useEffect } from "react/cjs/react.development";

//Traer documento de una coleccion por un id Especifico
// import { getFirestore } from '../../firebase';
// import { doc, getDoc } from '@firebase/firestore';
//Firebase
// const db = getFirestore();
// const itemRef = doc(db, 'Items', 'eTKovgoDMTP9mG7ghcMO');
// getDoc(itemRef).then((snapshot) => {
//     if(snapshot.exists()){
//         console.log(snapshot.data());
//     }
// })


const ItemDetail = ({productDetail}) =>{
    const cartConsumer = useCartContext();
    const [visibilityOnCart, setVisibilityOnCart] = useState(true);
    const [counterItem, setCounterItem] = useState(0);
    const [currentItems, setCurrentItems] = useState(0);

    const onCartAdd = (data) =>{
        if(data > 0){
            if(!cartConsumer.isInCart(productDetail)){
                setVisibilityOnCart(false);
                setCounterItem(data);
                productDetail['cantidad'] = data;
                cartConsumer.addItem(productDetail);
            }else{
                const updateItem = cartConsumer.updateItem(productDetail.id, data)
                if(updateItem.estado){
                    swal({
                        icon : 'success',
                        title: 'Producto actualizado',
                        text:`La cantidad a sido actualizada a: ${updateItem.nuevaCantidad} producto(s)`
                    })
                }
            }
        }else{
            swal({
                title: 'No hay stock disponible',
                icon: 'error'
            });
        }
    }

    useEffect(() => {
        const currentItems = cartConsumer.getItems();
        const isIncart = currentItems.some(items => items.id === productDetail.id);
        if (isIncart) {
            const getCantidad = cartConsumer.getCantidad(productDetail.id);
            setCurrentItems(getCantidad);
        }
    },[cartConsumer, currentItems, productDetail.id])

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
                    {currentItems > 0 ? <i>Actualmente tienes {currentItems} productos de este tipo en el carrito</i> : ''}
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