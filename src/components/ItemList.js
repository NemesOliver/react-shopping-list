//item list

//imports
import Item from "./Item";

const ItemList = ({ input }) => {
  return (
    <div className="item-list">
      <Item input={input}/>
    </div>
  );
};

export default ItemList;
