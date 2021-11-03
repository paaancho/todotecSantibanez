import "./itemList.css";
import Item from "../item/item";

const ItemList = ({product}) => {
  return (
    <div className="itemList">
      <Item product={product}/>
    </div>
  );
};

export default ItemList;