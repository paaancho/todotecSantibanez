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



    return (
        <CartContext.Provider value={{addItem, getItems, clearCart, removeItem, updateItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )

}

// export default CartContextProvider;


// export const CartContext = createContext([]);
// const [cartItems, setCartItems] = useState([]);


// import React, { useState } from "react";
// import { useContext } from "react/cjs/react.development";


// // export const useCart =  useContext(cartContext);
// export const useCart = useContext(CartContext);
// const CartContext = () => {
    
// };
// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     //Mostrar Carrito en Consola.
//     console.log(cart);


//     const addItem = (item, id) =>{

//         //some retorna true or false dependiendo si la condicion se cumple o no
//         const isInCart = cart.some((producto) => producto.id === id);
//         console.log(isInCart);
//         //Si el producto ya existia en el carrito
//         if(isInCart){
//             console.log(item.id + "ya estaba en el carrito");
//             console.log(`Carrito de Compras:\n${cart}`);
//             return false;
//         }
//         //Si el producto no estaba en el carrito
//         else{
//             setCart([...cart, item]);
//             console.log(`Carrito de Compras:\n${cart}`);
//             return true;
//         }
//     }

//     const emptyCart = () => {
//         setCart([]);
//     }

//     return(
//         <CartContext.Provider value={{cart, addItem, emptyCart}}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export default CartContext;