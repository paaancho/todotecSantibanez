import { createContext } from "react";

export const CartContext = createContext([]);





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