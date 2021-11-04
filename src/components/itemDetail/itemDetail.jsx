import ItemCount from "../itemCount/itemCount";
import './itemDetail.css';

const ItemDetail = ({productDetail}) =>{
    return(
        <>
            <h1 id="titleDetail">Detalle del Producto</h1>
            <div className="ItemDetail">
                <div className="imgProduct">
                    <img src={productDetail.photo} alt={productDetail.name} />
                </div>
                <div className="description">
                    <h2>{productDetail.name}</h2>
                    <p className="descriptionProduct">{productDetail.description}</p>
                    <h3>Precio: ${productDetail.price}</h3>
                    <ItemCount stock={productDetail.stock} />
                    <div className="cartAdd">
                        <button>Añadir al Carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;