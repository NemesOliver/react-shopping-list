import "./App.css";
//components
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="shopping-container">
      <Header />
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;
