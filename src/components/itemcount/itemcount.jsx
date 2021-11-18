import './itemCount.css';
import { useState } from 'react';
import swal from 'sweetalert';



const ItemCount = (props) =>{

    const [counterItem, setCounterItem] = useState(1);
    const itemStock = props.stock;

    // Funcion que añade 1 item al carrito
    const itemAdd = () => {
            if(itemStock === 0){
            // alert('No hay stock disponible!');
            swal({
                title: 'No hay stock disponible',
                icon: 'error'
            });
            setCounterItem(0);
        }else{
            if(counterItem < itemStock){
                setCounterItem(counterItem + 1);
            }else{
                // alert('No puedes superar el stock disponible')
                swal({
                    text: 'No puedes superar el stock disponible',
                    icon: 'warning'
                });
            }
        }
    }

    // Funcion que remueve 1 item al carrito
    const itemRemove = () => {
        if(itemStock === 0){
        // alert('No hay stock disponible!');
        swal({
            title: 'No hay stock disponible',
            icon: 'error'
        });
        setCounterItem(0);
        }else{
        if(counterItem > 1){
            setCounterItem(counterItem - 1);
        }else{
            // alert('No puedes añadir menos de 1 producto');
                swal({
                    text: 'No puede añadir menos de 1 producto',
                    icon: 'info'
                });
            }
        }
    } 

    // props.onAddCart(counterItem);
    const onAddCart = () =>{
        props.stock > 0 ? props.cartAdd(counterItem) : props.cartAdd(0);
    }

    return (
        <div className="containerItemCount">
            <p>Stock: {props.stock}</p>
            {
                props.stock > 0 
                ?
                <>
                    <div className="detailItemCount">
                        <button onClick={itemRemove} className="itemRemove">-</button>                
                        <div className="itemCuantity">
                            <span>{counterItem}</span>
                        </div>
                        <button onClick={itemAdd} className="itemAdd">+</button>
                    </div>
                    <div className="cartAdd">
                        <button onClick={onAddCart}>Añadir al Carrito</button>
                    </div>
                </>
                :
                <p className="noStock">Sin stock 😟</p>
            }
        </div>
    )
}

export default ItemCount;

