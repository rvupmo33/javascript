const name = "nura";
const repoCount = 7;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Animal-Party');
console.log(gameName[0],gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('P'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const news1 = "   nura  ";
console.log(news1);
console.log(news1.trim());

