import { useState } from "react";
import { createArray } from "../utils/createArray";

export function AddForm({ onAddItem }) {
  const [description, setDescripton] = useState("");
  const [quantity, setQuantity] = useState(1);

  function HandleSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    const itemList = {
      id: crypto.randomUUID(),
      quantity: quantity,
      description: description,
      isPacked: false,
    };
    onAddItem(itemList);
  }
  return (
    <form className="add-form" onSubmit={(e) => HandleSubmit(e)}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {createArray(20).map((idx) => (
          <option key={idx} value={idx}>
            {idx}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDescripton(e.target.value);
        }}
      />
      <button type="submit">ADD</button>
    </form>
  );
}
