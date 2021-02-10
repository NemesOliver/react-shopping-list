// each item

const Item = ({ item, setItems, items }) => {
  return (
    <div className="item">
      <p>{item.itemValue}</p>
      <button
        onClick={() => setItems(items.filter((el) => el.id !== item.id))} //delete handler
        href="#"
      >
        X
      </button>
    </div>
  );
};

export default Item;
