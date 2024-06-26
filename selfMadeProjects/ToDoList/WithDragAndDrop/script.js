let list = document.querySelector('.list');
let addTaskBtn = document.querySelector('button');

addTaskBtn.addEventListener("click", function addTask(){
  let userInput = document.querySelector(".userInput").value;
  if (userInput==""){
    alert("Text must be present to create a task")
  } else{
    console.log(userInput);
    console.log('Hello');
    let newli = document.createElement("li");
    newli.innerHTML = 
        ` 
          <p class="list-text">
            ${userInput} 
          </p>
          <p id="RemoveItem">
            x
          </p>
      `
      list.prepend(newli);
      document.querySelector(".userInput").value = ' ';
      saveTasks();
  }
})

list.addEventListener("click", function(e){
  if(e.target.id == "RemoveItem"){
    let x = e.target.closest("li");
    x.remove()
      saveTasks();
  } else if (e.target.classList.contains("list-text")){
    if (e.target.classList.contains("crossed")) {
      e.target.classList.remove("crossed");
      saveTasks();
    } else {
      e.target.classList.toggle("crossed");
      saveTasks();
    }
  }
})

function saveTasks(){
  localStorage.setItem("task", list.innerHTML)
}

function loadTasks(){
  list.innerHTML = localStorage.getItem("task")
}

loadTasks()