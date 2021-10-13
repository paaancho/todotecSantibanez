import './itemlistcontainer.css';


const ItemListContainer = (props) => {
    return (
        <div>
            <h3 className="textTitle">{props.textTitle}</h3>
            {props.children}
        </div>
    );
}

export default ItemListContainer;