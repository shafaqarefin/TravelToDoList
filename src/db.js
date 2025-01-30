export const travelList = JSON.parse(localStorage.getItem("travelList")) || [];

export function addToList(quantity, description) {
  travelList.push({
    id: travelList.length,
    quantity: quantity,
    description: description,
  });
  saveTravelList();
}

function saveTravelList() {
  localStorage.setItem("travelList", JSON.stringify(travelList));
}
