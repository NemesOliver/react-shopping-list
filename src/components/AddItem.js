//add item component

//uuid
import { uuid } from "uuidv4";

const AddItem = ({ input, setInput, items, setItems }) => {
  //functions
  const submitHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      setItems([
        ...items,
        {
          itemValue: input,
          id: uuid(),
        },
      ]);
    }
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => setInput(e.target.value)}
        className="userInput"
        type="text"
        placeholder="   Add item..."
        value={input}
      />
      <button>add +</button>
    </form>
  );
};

export default AddItem;
