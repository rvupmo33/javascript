// Exercises: Level 1

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "Chappell";
const lastName = "Roan";
const country = "America";
const city = "Willard";
const age = 26;
const isMarried = false;
const year = new Date().getFullYear;

const data = [firstName,lastName,country,city,age,isMarried,year]

data.forEach( function (Element) {
  console.log(typeof Element);
});


// Check if type of '10' is equal to 10

console.log('10' === 10);

// Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') == 10);

// Boolean value is either true or false.
console.log(isMarried);

// Write three JavaScript statement which provide truthy value.
console.log(3 > 2);
console.log(2 != 1);
console.log('catShark'.length === 'catShark'.length);

// Write three JavaScript statement which provide falsy value.
console.log(3 < 2);
console.log(5 != 5);
console.log('catShark'.length === 'catSshark'.length);

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
console.log(4>3);

// 4 >= 3
console.log(4>=3);

// 4 < 3
console.log(4<3);

// 4 <= 3
console.log(4 <= 3);

// 4 == 4
console.log(4==4);

// 4 === 4
console.log(4===4);

// 4 != 4
console.log(4!=4);

// 4 !== 4
console.log(4!==4);

// 4 != '4'
console.log(4 != '4');

// 4 == '4'
console.log(4 == '4');

// 4 === '4'
console.log(4 === '4');

// Find the length of python and jargon and make a falsy comparison statement.
const python = "python".length;
const jargon = "jargon".length;
console.log(python != jargon);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
console.log(4 > 3 && 10 < 12);

// 4 > 3 && 10 > 12
console.log(4 > 3 && 10 > 12);

// 4 > 3 || 10 < 12
console.log(4 > 3 || 10 < 12);

// 4 > 3 || 10 > 12
console.log(4 > 3 || 10 > 12);

// !(4 > 3)
console.log(!(4 > 3));

// !(4 < 3)
console.log(!(4 < 3));

// !(false)
console.log(!(false));

// !(4 > 3 && 10 < 12)
console.log(!(4 > 3 && 10 < 12));

// !(4 > 3 && 10 > 12)
console.log(!(4 > 3 && 10 > 12));

// !(4 === '4')
console.log(!(4 === '4'));

// There is no 'on' in both dragon and python
const python2 = "python";
const dragon = "dragon";
console.log(python2.includes("on") && dragon.includes("no"));

// Use the Date object to do the following activities
let date = new Date();

// What is the year today?
console.log(date.getFullYear());

// What is the month today as a number?
console.log(date.getMonth());

// What is the date today?
console.log(date.getDate());

// What is the day today as a number?
console.log(date.getDay());

// What is the hours now?
console.log(date.getHours());

// What is the minutes now?
console.log(date.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime());

// Exercises: Level 2

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

              // Enter base: 20
              // Enter height: 10
              // The area of the triangle is 100


function calcAreaOfTriangleUsingBH(){
  let base = prompt("Enter base: ")
  let height = prompt("Enter height: ")

  let area = 0.5 * base * height;
  console.log(area);
}

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

              // Enter side a: 5
              // Enter side b: 4
              // Enter side c: 3
              // The perimeter of the triangle is 12

function calcPerimeterOfTriangleUsingSides(){
  let a = prompt("Enter side a:")
  let b = prompt("Enter side b:")
  let c = prompt("Enter side c:")
  
  let perimeter = Number(a) + Number(b) + Number(c);
  
  console.log(perimeter);
}

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

function getPerimeterAndArea(){
  let length = Number(prompt("Enter Length: "))
  let width = Number(prompt("Enter width: "))
  
  let perimeter2 = 2 * (length + width);
  let area2 = length * width;
  
  console.log(`Perimeter: ${perimeter2} - Area: ${area2}`);
}

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
function getCircleAreaAndCircumference(){
  let r = Number(prompt("Enter Radius: "))
  let pi = 3.14;

  let area = pi * r * r
  let circumference = 2 * pi * r

  console.log(`Area: ${area} - Circumference: ${circumference.toFixed(2)}`);
}

// Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

            // Enter hours: 40
            // Enter rate per hour: 28
            // Your weekly earning is 1120

function calcPay(){
  let hours = Number(prompt("Enter hours:"))
  let ratePerHour = Number(prompt("Enter rate per hour:"))

  let weeklyEarnings = hours * ratePerHour;

  console.log(`Your weekly earning is ${weeklyEarnings}`);
}

// If the length of your name is greater than 7 say, your name is long else say your name is short.

let myName = "jellyfish";

if(myName.length > 7){
  console.log("your name is long");
} else{
  console.log("your name is short");
}

// Compare your first name length and your family name length and you should get this output.

            // let firstName = 'Asabeneh'
            // let lastName = 'Yetayeh'
            // Your first name, Asabeneh is longer than your family name, Yetayeh

let firstName2 = "John"
let lastName2 = "Smith"

console.log(
  firstName2 > lastName2 ? `Your first name, ${firstName2} is longer than your family name, ${lastName2}` : `Your family name, ${lastName2} is longer than your first name, ${firstName2}`
);

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

            // let myAge = 250
            // let yourAge = 25
            // I am 225 years older than you.

let myAge = 250;
let yourAge = 25;

console.log(`I am ${myAge - yourAge} years older than you.`);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

            // Enter birth year: 1995
            // You are 25. You are old enough to drive

            // Enter birth year: 2005
            // You are 15. You will be allowed to drive after 3 years.

function isDrivingAge(){
  let year2 = Number(prompt("Enter birth year: "))
  let currentDate = new Date().getFullYear();
  let userAge = currentDate - year2;
  let yearsLeft = 18 - userAge;
  console.log(
    userAge >= 18 ? `You are ${userAge}. You are old enough to drive` : `You are ${userAge}. You will be allowed to drive after ${yearsLeft} years.`
  );
}

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
            // Enter number of years you live: 100
            // You lived 3153600000 seconds.

function calcRemainingSecond(){
  let years3 = Number(prompt("Enter number of years you have lived:"))
  
  let secondsLived = years3 * 31536000

  console.log(
    years3 > 100 ? `You lived ${100 * 31536000} seconds.` :  `You lived ${secondsLived} seconds.`
  );
}

// Create a human readable time format using the Date time object
let HRTF = new Date();
let years = HRTF.getFullYear()
let months = HRTF.getMonth()
let days = HRTF.getDate()
let hours = HRTF.getHours()
let minutes = HRTF.getMinutes()

// YYYY-MM-DD HH:mm
console.log(
  `${years}-${months.toString().padStart(2,'0')}-${days.toString().padStart(2,'0')} ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`
);

// DD-MM-YYYY HH:mm
console.log(
  `${days.toString().padStart(2,'0')}-${months.toString().padStart(2,'0')}-${years} ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`
);

// DD/MM/YYYY HH:mm
console.log(
  `${days.toString().padStart(2,'0')}/${months.toString().padStart(2,'0')}/${years} ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`
);

// Exercises: Level 3

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
console.log(`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`);

// YYYY-MM-DD HH:mm eg. 20120-01-02 07:05
console.log(
  `${years}-${months.toString().padStart(2,'0')}-${days.toString().padStart(2,'0')} ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`
);