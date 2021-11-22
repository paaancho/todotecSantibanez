import './itemListContainer.css';
import ItemList from '../itemList/itemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../loader/loader';
import { collection, getDocs, where, query } from '@firebase/firestore';
import { getFirestore } from '../../firebase';

const ItemListContainer = (props) => {
    //obtener VariableURL
    const {categoryId} = useParams();
    //Se inicializa la variable 'producto' con un estado array vacío.
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        // Instancia de la bd firestore
        const db = getFirestore();
        // Query para filtrar por categoria
        const q = query(collection(db, "Items"), where("categoryId", "==", parseInt(categoryId)));
        categoryId ? 
        // Obtener los elementos a traves de un filter por categoryId
        getDocs(q)
        .then((snapshot) => {
            setProductos(snapshot.docs.map((doc) =>{
                return {...doc.data(), id : doc.id}
            }));
        })
        :
        // Obtener todos los documentos de una colección sin filter
        getDocs(collection(db, 'Items'))
        .then((snapshot) => {
            setProductos(snapshot.docs.map((doc) => {
                const newArrayProducts = {...doc.data(), id : doc.id};
                return newArrayProducts;
            }))
        })
    }, [categoryId]);

    return (
        <div className="ItemListContainer">
            <h3 className="textTitle">{props.titleCategory}</h3>
            <div className="Items">
            {  productos.length > 0
                ? productos.map((producto) => (
                <ItemList product={producto} key={producto.id} />
                ))
                : <Loader />}
            </div>
        </div>
    );  
}

export default ItemListContainer;