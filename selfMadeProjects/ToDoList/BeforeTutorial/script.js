const currentTime = document.getElementById("currentTime");

let date = new Date();
currentTime.textContent = date.toLocaleDateString();

//

let listItem = document.querySelectorAll(".item");
let removeBtn = document.getElementById("RemoveItem");
let itemContainer = document.querySelector(".taskContainer");

itemContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("item")) {
    if (e.target.classList.contains("cross")) {
      e.target.classList.remove("cross");
    } else {
      e.target.classList.toggle("cross");
    }
  } else if (e.target.id === "RemoveItem") {
    let li = e.target.closest("li");
    li.remove();
  }
});
