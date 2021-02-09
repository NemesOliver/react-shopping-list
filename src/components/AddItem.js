//add item component

const AddItem = ({ addToStatehandler, setInput }) => {
  return (
    <form onSubmit={addToStatehandler}>
      <input
        onChange={(e) => setInput(e.target.value)}
        className="userInput"
        type="text"
        placeholder="   Add item..."
      />
      <button>add +</button>
    </form>
  );
};

export default AddItem;
