let currentVal = document.getElementById("counter");
let counter = 0;

function increaseCounter() {
  counter++;
  currentVal.textContent = counter;
}

function resetCounter() {
  counter = 0;
  currentVal.textContent = counter;
}

function decreaseCounter() {
  counter--;
  currentVal.textContent = counter;
}
