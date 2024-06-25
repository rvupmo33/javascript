// Exercises: Level 1

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

      // Enter your age: 30
      // You are old enough to drive.

      // Enter your age:15
      // You are left with 3 years to drive.

function canDrive(){
  let age = Number(prompt("Enter your age: "))
  if(age >= 18){
    console.log(`You are old enough to drive`);
  } else{
    let yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} years to drive.`);
  }
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
      // Enter your age: 30
      // You are 5 years older than me.

function whoIsOlder(){
  let myAge = Number(prompt("Enter your age: "))
  const yourAge = 20;
  if(myAge > yourAge){
    let difference = myAge - yourAge;
    console.log(`You are ${difference} years older than me`);
  } else{
    let difference = yourAge - myAge;
    console.log(`I am ${difference} years older than you`);
  }
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways 1. using if else - 2. ternary operator.
      // let a = 4
      // let b = 3
      // 4 is greater than 3

let a = 4
let b = 3

if (a > b){
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`);


// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
      // Enter a number: 2
      // 2 is an even number

      // Enter a number: 9
      // 9 is is an odd number.

function evenChecker(){
  let number = Number(prompt("Enter a number: "))
  if (number % 2 === 0  ){
    console.log(`${number} is an even number`);
  } else {
    console.log(`${number} is is an odd number.`);
  }
}

// Exercises: Level 2

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

function gradeChecker(){
  let grade = Number(prompt("Enter a grade: "))
  if (grade > 100 || grade < 0){
    console.log("Invalid input");
  } else if(grade >= 70 && grade < 80){
    console.log("B");
  } else if(grade >= 60 && grade < 70){
    console.log("C");
  } else if(grade >= 50 && grade < 60){
    console.log("D");
  } else if (grade < 50){
    console.log("F");
  } else if(grade >= 80){
    console.log("A");
  }
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

// September, October or November, the season is Autumn.

// December, January or February, the season is Winter.

// March, April or May, the season is Spring

// June, July or August, the season is Summer

// Check if a day is weekend day or a working day. Your script will take day as an input.
        // What is the day  today? Saturday
        // Saturday is a weekend.

        // What is the day today? saturDaY
        // Saturday is a weekend.

        // What is the day today? Friday
        // Friday is a working day.

        // What is the day today? FrIDAy
        // Friday is a working day.

// Exercises: Level 3

// Write a program which tells the number of days in a month.
        // Enter a month: January
        // January has 31 days.

        // Enter a month: JANUARY
        // January has 31 day

        // Enter a month: February
        // February has 28 days.

        // Enter a month: FEbruary
        // February has 28 days.

// Write a program which tells the number of days in a month, now consider leap year.

 