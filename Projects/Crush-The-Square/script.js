const square = document.querySelector(".square");
const play = document.querySelector(".start");
const displayClicksLeft = document.querySelector(".displayClicksLeft");
const restartMessage = document.querySelector(".restartMenu");
const restartBtn = document.getElementById("restartBtn");
let clicksLeft = document.getElementById("clicksLeft");
let currentWidth = "35px";
let currentHeight = "35px";
let counter = 16;

play.addEventListener("click", () => {
  play.classList.add("hidden");
  square.classList.remove("hidden");
  displayClicksLeft.classList.remove("hidden");
  clicksLeft.textContent = counter;
});

square.addEventListener("click", () => {
  if (counter > 1) {
    let Vvalue = Math.floor(Math.random() * 490);
    let Hvalue = Math.floor(Math.random() * 640);

    square.style.bottom = Vvalue + "px";
    square.style.left = Hvalue + "px";

    currentWidth = parseInt(currentWidth);
    currentWidth -= 2;
    square.style.width = currentWidth + "px";

    currentHeight = parseInt(currentHeight);
    currentHeight -= 2;
    square.style.height = currentHeight + "px";

    counter--;
    clicksLeft.textContent = counter;
    console.log(counter);
  } else {
    let Vvalue = Math.floor(Math.random() * 490);
    let Hvalue = Math.floor(Math.random() * 640);

    square.style.bottom = Vvalue + "px";
    square.style.left = Hvalue + "px";

    currentWidth = parseInt(currentWidth);
    currentWidth -= 2;
    square.style.width = currentWidth + "px";

    currentHeight = parseInt(currentHeight);
    currentHeight -= 2;
    square.style.height = currentHeight + "px";

    counter--;
    clicksLeft.textContent = counter;
    restartMessage.classList.remove("hidden");
    square.classList.add("hidden");

    restartBtn.addEventListener("click", () => {
      restartMessage.classList.add("hidden");
      currentWidth = 35;
      currentHeight = 35;
      square.style.width = currentWidth + "px";
      square.style.height = currentHeight + "px";
      counter = 16;
      clicksLeft.textContent = counter;
      square.classList.remove("hidden");
    });
  }
});

// SETTINGS MENU
const menuButton = document.querySelector(".popup");
const menu = document.querySelector(".menu");
const closeBtn = document.getElementById("closeBtn");

menuButton.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
});
