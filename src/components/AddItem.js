//add item component

//uuid
import { v4 as uuidv4 } from "uuid";

const AddItem = ({ input, setInput, items, setItems }) => {
  //functions
  //add item to the list and reset input value
  const submitHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      setItems([
        ...items,
        {
          itemValue: input,
          id: uuidv4(),
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
