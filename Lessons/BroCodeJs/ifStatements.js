let age;

let time = 14;

if(time < 12){
  console.log("Good morning!");
} else{
  console.log("Good afternoon!");
}

let isStudent = true;

if(isStudent){
  console.log("You are a student!");
} else{
  console.log("You are NOT a student!");
}

let hasLicense = false;

if(age>=16){
  console.log("You are old enough to drive!");
  if(hasLicense){
    console.log("You also have a license!");
  } else{
    console.log("However, you do not have a license...");
  }
} else{
  console.log("You are NOT old enough to drive");
}

// ----------------------------------------------

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement")

mySubmit.onclick = function(){
  age = myText.value;
  age = Number(age);
  if(age >= 18 && age <= 100){
    resultElement.textContent = `You are old enough to enter this site!`;
  } else if(age < 0){
    resultElement.textContent = `Your age can't be below zero...`;
  } else if (age >= 100){
    resultElement.textContent = `You are too old..`;
  } else {
    resultElement.textContent = `You are NOT old enough to enter this site!`;
  }
}