import { useState, useEffect } from "react";
import ProductosJSON from '../../Products.json';
import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () => {
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
    return(
        <div className="itemDetailContainer">
            {
                productos ?
                productos.map((producto) =>{
                    return(
                        <ItemDetail productDetail={producto}/>
                    )
                })
                : 'Cargando Detalle...'
            }
        </div>
    )
}

export default ItemDetailContainer;