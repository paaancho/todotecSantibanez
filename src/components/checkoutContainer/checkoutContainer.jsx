import './checkoutContainer.css';
import CheckoutDetail from '../checkoutDetail/checkoutDetail';
import { useCartContext } from '../../contexts/cartContext/cartContext';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getFirestore } from "../../firebase";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
            total: cartContextConsumer.getTotalCarts(),
            date : Timestamp.fromDate(new Date())
        };
        const docRef = await addDoc(collection(db, 'Orders'), order).then(({id}) => id);
        cartContextConsumer.clearCart();
        swal({
            icon : 'success',
            title: 'Orden creada',
            text: `Tú numero de orden es: ${docRef}`
        })
        .then((value) => {
            history.push("/");
        })
    }

    return (
        getItems.length > 0 ?
        <div className="checkoutContainer">
            <h2 style={{textAlign:'center'}}>Finalizar compra</h2>
            <CheckoutDetail items={getItems} totalCart={totalCart} createOrder={createOrder}/>
        </div> 
        : 
        <div className="clearCart">
        <p>¿Perdido? Vuelve al inicio y empieza a comprar</p>
        <Link to="/">
            <button type="button">Ir a comprar</button>
        </Link>
    </div>
    )
}

export default CheckoutContainer;