// 1. Check the innerText of "first" element
// 2. Check the textContent of "second" element
// 3. Check the innerHTML of "third" element

const firstText = document.querySelector(".first");
console.log(firstText.innerText);

const secondText = document.querySelector(".second");
console.log(secondText.textContent);

const thirdText = document.querySelector(".third");
console.log(thirdText.innerHTML);
