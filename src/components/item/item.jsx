import ItemCount from '../itemCount/itemCount';

const Item = ({product}) =>{
    return (
        <div className="item">
            <img src={product.photo} alt="" />
            <h3>{product.name}</h3>
            <span>${product.price}</span><br />
            <ItemCount stock={product.stock} counter="0" />
            <button>Añadir al Carrito</button>
        </div>
    );
};

export default Item;