import { createContext, useState } from "react";
import { useContext } from "react/cjs/react.development";
import swal from "sweetalert";

//Creo el context
const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

    //Establezco estado para guardar los items del Carrito
    const [cartItems, setCartItems] = useState([]);

    const getItems = () => cartItems;

    //funcion que añade un item al estado cartItems.
    const addItem = (item) => {
        const isIncart = cartItems.some((product) => product.id === item.id);
        if(!isIncart){
            setCartItems([...cartItems, item]);
            swal({
                icon : 'success',
                title: 'Producto añadido al carrito'
            })
        }else{
            swal({
                icon : 'info',
                title: 'Este producto ya esta añadido al carrito'
            })
        }
    }

    //función que actualiza el item si este ya existe
    const updateItem = (item) => {
        
    }

    const removeItem = (itemId) => {
        // console.log(itemId);
        const exist = cartItems.some((product) => product.id === itemId);
        if(exist){
            const itemRemove = cartItems.filter((product) => product.id !== itemId);
            setCartItems(itemRemove);
        }
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const isInCart = (item) =>{
        return cartItems.some((product) => product.id === item.id);
    }


    const getTotalCarts = () => {
        let total = 0;
        cartItems.forEach(element => {
            let subTotal = element.cantidad * element.price;
            total = total + subTotal;
        });
        return total;
    }



    return (
        <CartContext.Provider value={{addItem, getItems, clearCart, removeItem, updateItem, isInCart, getTotalCarts}}>
            {children}
        </CartContext.Provider>
    )

}