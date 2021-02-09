// each item

const Item = ({ id, item, successHandler }) => {
  return (
    <div className="item">
      <p>{item}</p>
      <button onClick={(e) => successHandler()} href="#">
        X
      </button>
    </div>
  );
};

export default Item;
