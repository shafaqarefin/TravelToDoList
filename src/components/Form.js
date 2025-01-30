import { useState } from "react";
import { createArray } from "../utils/createArray";
import { addToList } from "../db";
export function AddForm() {
  const [description, setDescripton] = useState("");
  const [quantity, setQuantity] = useState(1);

  function HandleSubmit(e) {
    e.preventDefault();
    addToList(quantity, description);
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
      <button type="Submit">ADD</button>
    </form>
  );
}

export function ActionForm() {
  return (
    <form className="actions">
      <select>
        <option value="input">SORT BY INPUT ORDER</option>
        <option value="description">SORT BY DESCRIPTION </option>
        <option value="packed">SORT BY PACKED STATUS</option>
      </select>
      <button>CLEAR LIST</button>
    </form>
  );
}
