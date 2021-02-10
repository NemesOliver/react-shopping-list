//item list

//imports
import Item from "./Item";

const ItemList = ({ items, setItems }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          id={item.id}
          items={items}
          setItems={setItems}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default ItemList;
