import "./App.css";
//import state
import React, { useState } from "react";
//components
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import { uuid } from "uuidv4";

function App() {
  //state
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  //functions
  const addToStatehandler = (e) => {
    e.preventDefault();
    // push inputs in the array **
    if (input !== "") {
      if (items.length === 0) {
        setItems([
          {
            itemValue: input,
            id: uuid(),
          },
        ]);
      } else {
        setItems([
          ...items,
          {
            itemValue: input,
            id: uuid(),
          },
        ]);
      }
    }
    setInput("");
  };
  return (
    <div className="shopping-container">
      <Header />
      <AddItem
        addToStatehandler={addToStatehandler}
        input={input}
        setInput={setInput}
        setItems={setItems}
        items={items.itemValue}
      />
      <ItemList items={items} input={input} />
    </div>
  );
}

export default App;
