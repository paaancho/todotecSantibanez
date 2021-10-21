import './itemCount.css';

const ItemCount = (props) =>{
    return (
        <div className="containerItemCount">
            <p>Stock: {props.stock}</p>
            <div className="detailItemCount">
                <button onClick={props.onRemove}>-</button>                
                <div className="itemCuantity">
                    <span>{props.counter}</span>
                </div>
                <button onClick={props.onAdd}>+</button>
            </div>
        </div>
    )
}

export default ItemCount