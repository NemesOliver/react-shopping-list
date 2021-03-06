import "./App.css";
//import state
import React, { useState, useEffect } from "react";
//components
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  //state
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  //local storage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="shopping-container">
      <Header />
      <AddItem
        input={input}
        setInput={setInput}
        setItems={setItems}
        items={items}
      />
      <ItemList items={items} input={input} setItems={setItems} />
    </div>
  );
}

export default App;
