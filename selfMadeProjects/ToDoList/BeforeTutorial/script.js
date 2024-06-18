const currentTime = document.getElementById("currentTime");

let date = new Date();
currentTime.textContent = date.toLocaleDateString();

//

let itemContainer = document.querySelector(".taskContainer");
let inputBtn = document.getElementById("inputBtn");
let testUl = document.getElementById("testUl");

inputBtn.addEventListener("click", () => {
  let taskInput = document.getElementById("inputField").value;
  if (taskInput === "") {
    alert("Input must be present");
  } else {
    let list = document.createElement("li");
    list.innerHTML = `
              <p class="item">${taskInput}</p>
              <p id="RemoveItem">X</p>
              `;
    testUl.prepend(list);
    document.getElementById("inputField").value = "";
  }
});

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
