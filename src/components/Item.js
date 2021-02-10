// each item

const Item = ({ item, setItems, items }) => {
  //delete handler
  const deleteHandler = (e) => {
    setItems(items.filter((el) => el.id !== item.id));
  };
  return (
    <div className="item">
      <p>{item.itemValue}</p>
      <button onClick={deleteHandler} href="#">
        X
      </button>
    </div>
  );
};

export default Item;
