import './itemlistcontainer.css';
import ItemCount from '../itemcount/itemcount';
import logo from '../../components/navbar/logo.svg'

const ItemListContainer = (props) => {
    return (
        <div className="ItemListContainer">
            <h3 className="textTitle">{props.textTitle}</h3>
            <img src={logo} alt="" />
            <ItemCount stock={props.stock} counter={props.counter} onAdd={props.onAdd} onRemove={props.onRemove} />
        </div>
    );  
}

export default ItemListContainer;