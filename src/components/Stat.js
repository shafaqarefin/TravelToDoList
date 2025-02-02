export function Stats({ item }) {
  const numberOfItems = item.length;
  const numberOfPacked = item.filter((items) => items.isPacked).length;
  const percentageCompleted = Math.round(
    (numberOfPacked / numberOfItems) * 100
  );
  return (
    <footer className="stats">
      {percentageCompleted === 100 ? (
        <p>You got everything! Ready to go ✈️</p>
      ) : numberOfItems > 0 ? (
        <p>
          💼 You have {numberOfItems} items on your list, and you already packed{" "}
          {numberOfPacked} items ({percentageCompleted}%)
        </p>
      ) : (
        <p>Start adding some items to your packing list 🚀</p>
      )}
    </footer>
  );
}
