const king = document.querySelector(".chess-piece");
const squares = document.querySelectorAll(".square");
const infoDisplay = document.querySelector("#info");

king.addEventListener("drag", dragging)
king.addEventListener("dragstart", dragStart)

squares.forEach(square => {
  square.addEventListener("dragover", dragOver)
  square.addEventListener("dragenter", dragEnter)
  square.addEventListener("drop", dragDrop)
  square.addEventListener("dragend", dragEnd)
})

let beingDragged;

function dragStart(e){
  beingDragged = e.target;
  console.log("Dragging has started on " + beingDragged.id);
}

function dragging(){
  console.log("You are dragging a " + beingDragged.id);
  infoDisplay.textContent = "You are dragging a " + beingDragged.id
}

function dragOver(e){
  e.preventDefault();
  console.log("You are dragging something over " + e.target.classList);
}

function dragEnter(e){
  console.log("You are entering the space of " + e.target.classList);
}

function dragEnd(e){
  console.log("You are leaving the space of " + e.target.classList);
}

function dragDrop(e){
  e.target.append(beingDragged)
  infoDisplay.textContent = ""
}