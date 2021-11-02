import './itemListContainer.css';
import ItemList from '../itemList/itemList';


const ItemListContainer = (props) => {
    return (
        <div className="ItemListContainer">
            <h3 className="textTitle">{props.titleCategory}</h3>
            <div className="Items">
                <ItemList />
            </div>
        </div>
    );  
}

export default ItemListContainer;