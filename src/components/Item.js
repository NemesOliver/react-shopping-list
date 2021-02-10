// each item

const Item = ({ item, items, setItems, deleteHandler }) => {
  //successHandler

  return (
    <div className="item">
      <p>{item.itemValue}</p>
      <button
        onClick={() => deleteHandler()}
        href="#"
      >
        X
      </button>
    </div>
  );
};

export default Item;
