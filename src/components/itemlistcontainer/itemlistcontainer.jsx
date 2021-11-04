import './itemListContainer.css';
import ItemList from '../itemList/itemList';
import { useEffect, useState } from 'react';
import ProductosJSON from '../../Products.json';
import { useParams } from 'react-router-dom';
import Loader from '../loader/loader';


const ItemListContainer = (props) => {
    //obtener VariableURL
    const {categoryId} = useParams();
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
            //setProductos(res);
            categoryId ? setProductos(res.filter(prod => prod.categoryId === parseInt(categoryId))) : setProductos(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [categoryId]);

    return (
        <div className="ItemListContainer">
            <h3 className="textTitle">{props.titleCategory}</h3>
            <div className="Items">
            {  productos.length
                ? productos.map((producto) => (
                <ItemList product={producto} key={producto.id} />
                ))
                : <Loader />}
            </div>
        </div>
    );  
}

export default ItemListContainer;