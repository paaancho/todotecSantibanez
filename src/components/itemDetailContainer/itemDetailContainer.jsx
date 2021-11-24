import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import Loader from "../loader/loader";
import { getDoc, doc} from '@firebase/firestore';
import { getFirestore } from '../../firebase';
import './itemDetailContainer.css';

const ItemDetailContainer = () => {
    const {itemId} = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const ref = doc(db, "Items", itemId);
        getDoc(ref).then((snapshot) => {
            if (snapshot.exists()) {
                setProducto({...snapshot.data(), id : itemId});
            }
        });
    }, [itemId]);


    return(
        <div className="itemDetailContainer">
            {
                producto?
                    <ItemDetail productDetail={producto}/>
                : <Loader />
            }
        </div>
    )
}

export default ItemDetailContainer;