function PrintMe(){
  console.log('Printing...');
}
PrintMe();

// param in the function is a parameter
function printThis(param){
  console.log(param);
}
// The value of param is an argument
printThis('valueToBePrinted');

const Print = function(){
  console.log('printed!');
};
Print();

const PrintAgain = function(a,b){
  console.log(a, b);
};
PrintAgain(1,2);

// return

function sum(a,b){
  return a + b;
}
console.log(sum(5,5));

// Default parameters

function calc(a,b){
  return (2*(a+b));
}
console.log(calc(2,3));

// Rest parameters
// ... // only 1 and has to be last parameter
// Rest goes into array

function collectThings(x,...y){
  console.log(x);
  console.log(y);
}
collectThings(5,6,7,8,9);

// Arrow functions

const add = (x,y) => x + y;
console.log(add(2,3));

// Nested function
function outer(){
  console.log('outer');
    function inner(){
      console.log('inner');
    }
    inner()
}
outer();


// Function