import { createContext, useState, useContext } from "react";
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
    const updateItem = (itemId, cantidad) => {
        //obtengo el indice del elemento a actualizar
        const indiceElement = cartItems.findIndex((item) => item.id === itemId);
        //hago una copia del array de los itmes para no modificar el verdadero por seguridad.
        const copyArray = [...cartItems];
        //sumo la cantidadOriginalmente con la nuevaCantidad
        const nuevaCantidad = cartItems[indiceElement].cantidad + cantidad;
        copyArray[indiceElement].cantidad = nuevaCantidad;
        setCartItems(copyArray);
        return {nuevaCantidad: nuevaCantidad, estado: true};
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

    const getCantidad = (itemId) => {
        const indiceElement = cartItems.findIndex((item) => item.id === itemId);
        const cantidad = cartItems[indiceElement].cantidad;
        return cantidad;
    }

    const getStock = (itemId) => {
        const indiceElement = cartItems.findIndex((item) => item.id === itemId);
        const stock = cartItems[indiceElement].stock;
        return stock;
    }



    return (
        <CartContext.Provider value={{addItem, getItems, clearCart, removeItem, updateItem, isInCart, getTotalCarts, getCantidad, getStock}}>
            {children}
        </CartContext.Provider>
    )

}