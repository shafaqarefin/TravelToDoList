export function Items({ items, key }) {
  return (
    <li>
      <input type="checkbox" id={key} />
      <span>
        {items.quantity + " "}
        {items.description}
      </span>
      <button>❌</button>
    </li>
  );
}
