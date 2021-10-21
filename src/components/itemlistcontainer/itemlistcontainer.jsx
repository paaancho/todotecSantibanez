import './itemListContainer.css';
import ItemList from '../itemList/itemList';
import ProductosJSON from '../../Products.json';
import { useEffect, useState } from 'react';

const ItemListContainer = (props) => {
    //Se inicializa la variable 'producto' con un estado array vacío.
    const [productos, setProductos] = useState([]);

    //getData obtiene los productos del json Productos con una promesa y timeOut de 2seg.
    const getData = (data) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            }else {
                reject("No se encontro nada");
            }
        }, 2000);
    });

    useEffect(() => {
        getData(ProductosJSON)
        .then((res) => {
            setProductos(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="ItemListContainer">
            <h3 className="textTitle">{props.titleCategory}</h3>
            <div className="Items">
            {  productos.length
                ? productos.map((producto) => (
                <ItemList product={producto} key={producto.id} />
                ))
                : "Cargando Productos..."}
            </div>
        </div>
    );  
}

export default ItemListContainer;