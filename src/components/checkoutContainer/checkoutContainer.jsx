import './checkoutContainer.css';
import CheckoutDetail from '../checkoutDetail/checkoutDetail';
import { useCartContext } from '../../contexts/cartContext/cartContext';
import { collection, addDoc, Timestamp, writeBatch, doc, getDoc } from "firebase/firestore";
import { getFirestore } from "../../firebase";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const CheckoutContainer = () =>{
    const cartContextConsumer = useCartContext();

    const getItems = cartContextConsumer.getItems();
    const totalCart = cartContextConsumer.getTotalCarts();
    const history = useHistory();

    const createOrder = async (formData) => {
        const db = getFirestore();
        const order = {
            buyer:  formData,
            items: getItems,
            total: totalCart,
            date : Timestamp.fromDate(new Date())
        };
        const docRef = await addDoc(collection(db, 'Orders'), order).then(({id}) => id);
        if(docRef !== ""){
            getItems.forEach(async (element) => {
                const batch = writeBatch(db);
                let stockComprado = element.cantidad;
                const docRef = doc(db, "Items", element.id);
                const stockActual = await getDoc(docRef).then((snapshot) => snapshot.data().stock);
                if(stockActual > 0){
                    let stockDifer = stockActual - stockComprado;
                    batch.update(docRef, { stock:  stockDifer});
                    batch.commit();
                }
            });
        }
        swal({
            icon : 'success',
            title: 'Orden creada',
            text: `Tú numero de orden es: ${docRef}`
        })
        .then(() => {
            cartContextConsumer.clearCart();
            history.push("/");
        })
    }

    return (
        getItems.length > 0 ?
        <div className="checkoutContainer">
            <h2 style={{textAlign:'center'}}>Finalizar compra</h2>
            <CheckoutDetail items={getItems} totalCart={totalCart} createOrder={createOrder}/>
        </div> 
        : ''
    )
}

export default CheckoutContainer;