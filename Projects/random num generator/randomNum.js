let generateBtn = document.getElementById("generateBtn");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");

generateBtn.onclick = function(){
    let max = document.getElementById("min").value;
    let randomNum1 = Math.floor(Math.random()*max) +1;
    let randomNum2 = Math.floor(Math.random()*max) +1;
    let randomNum3 = Math.floor(Math.random()*max) +1;
    num1.innerHTML = randomNum1;
    num2.innerHTML = randomNum2;
    num3.innerHTML = randomNum3;
}
