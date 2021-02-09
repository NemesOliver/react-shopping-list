import "./App.css";
//import state
import React, { useState } from "react";
//components
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  //state
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  //functions
  const addToStatehandler = (e) => {
    e.preventDefault();
    // push inputs in the array **
    setItems();
  };
  return (
    <div className="shopping-container">
      <Header />
      <AddItem
        addToStatehandler={addToStatehandler}
        input={input}
        setInput={setInput}
        setItems={setItems}
        items={items}
      />
      <ItemList input={input} />
    </div>
  );
}

export default App;
