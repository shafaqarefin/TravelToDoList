export function createArray(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i + 1);
  }
  return arr; // This line was missing
}
