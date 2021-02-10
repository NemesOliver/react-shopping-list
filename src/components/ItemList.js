//item list

//imports
import Item from "./Item";

const ItemList = ({ items, setItems }) => {
  //delete handler
  const deleteHandler = () => {
    // items.forEach((item) => {
    // });
    // delete items
  };
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          id={item.id}
          items={items}
          setItems={setItems}
          key={item.id}
          item={item}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};

export default ItemList;
