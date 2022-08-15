const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const display = document.getElementById("counterDisplay");
//initial State
let counter = 0;
incrementEl.addEventListener("click", () => {
  counter++;
  display.innerHTML = counter;
});
decrementEl.addEventListener("click", () => {
  counter--;
  display.innerHTML = counter;
});
