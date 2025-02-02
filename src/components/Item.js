export function Items({ items, onDeleteItem, handleChecked }) {
  return (
    <li>
      <input
        type="checkbox"
        id={items.id}
        checked={items.isPacked ? true : false}
        onChange={(e) => {
          handleChecked(e.target.id, e.target.checked);
        }}
      />
      <span style={items.isPacked ? { textDecoration: "line-through" } : {}}>
        {items.quantity + " "}
        {items.description}
      </span>
      <button
        onClick={(e) => {
          onDeleteItem(items.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
