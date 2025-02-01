import { Items } from "./Item.js";
// import * as Form from "./Form.js";
// import { travelList } from "../db.js";
export function PackingList({
  itemsList,
  onClearList,
  onDeleteItem,
  handleChecked,
}) {
  function arrangeList(e) {}

  return (
    <>
      <div className="list">
        <ul>
          {itemsList.map((items) => (
            <Items
              items={items}
              onDeleteItem={onDeleteItem}
              handleChecked={handleChecked}
            />
          ))}
        </ul>
        <div className="actions">
          <select onChange={arrangeList}>
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
