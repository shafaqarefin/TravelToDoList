import { Logo } from "./Logo.js";
import { PackingList } from "./Packinglist.js";
import { Stats } from "./Stat.js";
import { AddForm } from "./Form.js";
import { useState } from "react";

function App() {
  const [item, setItem] = useState([]);

  function onAddItem(newItem) {
    setItem([...item, newItem]);
  }
  function onClearList() {
    setItem([]);
  }
  function onDeleteItem(deleteId) {
    const updatedItems = item.filter((vals) => vals.id !== deleteId);

    setItem(updatedItems);
  }
  function handleChecked(id, checked) {
    const updatedItems = item.map((items) =>
      items.id === id ? { ...items, isPacked: checked } : items
    );
    setItem(updatedItems);
  }

  return (
    <div className="app">
      <Logo />
      <AddForm onAddItem={onAddItem} item={item} />
      <PackingList
        itemsList={item}
        onClearList={onClearList}
        onDeleteItem={onDeleteItem}
        handleChecked={handleChecked}
      />
      <Stats item={item} />
    </div>
  );
}

export default App;
