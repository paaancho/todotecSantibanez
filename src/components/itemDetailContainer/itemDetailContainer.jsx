import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductosJSON from '../../Products.json';
import ItemDetail from "../itemDetail/itemDetail";
import Loader from "../loader/loader";
import './itemDetailContainer.css';

const ItemDetailContainer = () => {
    //Id producto
    const {itemId} = useParams();
    console.log(itemId);
    //Se inicializa la variable 'producto' con un estado array vacío.
    const [producto, setProducto] = useState(null);

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
            itemId ? setProducto(res.filter(prod => prod.id === parseInt(itemId))) : setProducto(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [itemId]);

    console.log(producto);

    return(
        <div className="itemDetailContainer">
            {
                producto?
                producto.map((product) => (
                    <ItemDetail key={product.id} productDetail={product}/>
                ))
                : <Loader />
            }
        </div>
    )
}

export default ItemDetailContainer;