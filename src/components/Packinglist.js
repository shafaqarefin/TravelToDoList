import { useState } from "react";
import { Items } from "./Item.js";

export function PackingList({
  itemsList,
  onClearList,
  onDeleteItem,
  handleChecked,
}) {
  const [sortType, setSortType] = useState("input");
  let sortedList;
  if (sortType === "input") {
    sortedList = itemsList;
  } else if (sortType === "description") {
    sortedList = itemsList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedList = itemsList
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedList.map((items) => (
            <Items
              items={items}
              onDeleteItem={onDeleteItem}
              handleChecked={handleChecked}
            />
          ))}
        </ul>
        <div className="actions">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="input">SORT BY INPUT ORDER</option>
            <option value="description">SORT BY DESCRIPTION </option>
            <option value="packed">SORT BY PACKED STATUS</option>
          </select>
          <button
            onClick={() => {
              if (window.confirm("Are you sure about that?")) {
                onClearList();
              }
            }}
          >
            CLEAR LIST
          </button>
        </div>
      </div>
    </>
  );
}
