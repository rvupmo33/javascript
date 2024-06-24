let accordianContainer = document.querySelector(".accordianContainer");

accordianContainer.addEventListener("click", function toggle(e){
  if(e.target.closest(".question")){
    let accordian = e.target.closest(".accordian")
    let question = e.target.closest(".question")
    let answer = accordian.querySelector(".answer")
    answer.classList.toggle('hidden');
  }
})