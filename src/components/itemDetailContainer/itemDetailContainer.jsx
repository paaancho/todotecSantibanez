import { useEffect, useState } from 'react';
import productosJSON from '../../Products.json';
import ItemDetail from '../itemDetail/itemDetail';

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState(null);

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
        getData(productosJSON)
        .then((response) => {
            setItemDetail(response);
        })
        .catch((error) =>{
            console.log(error);
        })
    },[]);

    console.log(itemDetail);

    return (
        <div className="itemDetailContainer">
            {
                itemDetail ?
                itemDetail.map((itemDetail) =>(
                    <ItemDetail productDetail={itemDetail} key={itemDetail.id}/>
                )) 
                : 'Cargando Productos'
            }
        </div>
    )
}

export default ItemDetailContainer;