//item list

//imports
import Item from "./Item";
// uuid
import { uuid } from "uuidv4";

const ItemList = ({ items }) => {
  //success handler
  const successHandler = () => {
    console.log();
  };
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          id={uuid()}
          key={item.id}
          item={item.itemValue}
          successHandler={successHandler}
        />
      ))}
    </div>
  );
};

export default ItemList;
