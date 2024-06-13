/*
// Arrays
const groceries = ['banana', 'apple', 'orange', 'pear'];

// Indexing
console.log(groceries);
console.log(groceries[0]);
console.log(groceries[1]);
console.log(groceries[3]);

// Array Methods
groceries.push('cookies');
groceries.push('milkshake');
console.log(groceries);

// Array slice
// Doesnt slice last index value
console.log(groceries.slice(0,3))
console.log(groceries.slice(3,6));
console.log(groceries.slice(1,4));

// array methods (slice, push, indexOf, length)
console.log(groceries.indexOf('pear'));
console.log(groceries.length);
*/
/*
// OBJECTS
// Key value pairs
const person ={
  name: 'Leonardo',
  shirt: 'white'
}
// dot notation
console.log(person.shirt);
// bracket notation
console.log(person['name']);

// assign object
person.phone = '437 667 6755'
console.log(person.phone);

const person2 = {
  name: 'Qazi',
  shirt: 'black'
}

console.log(person2.name);


// es6 arrow func - 2 args
// objects
// template literals
const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt, 
    assets: 100000, 
    liability: 50000, 
    network: function(){
      return this.assets - this.liability;
    }
  };
  const intro = `Hi! My name is ${person.name} and the color of my shirt is ${person.shirt}. My net work is around $${person.network()} CAD!`
  return intro
}

console.log(introducer('Vue', 'green'));
// console.log(introducer('Leonardo', 'white'));
*/

const letterCounter = () => {
  let result = 0;
  for (letter in phrase){
    console.log(Number(letter)+1);
    result = Number(letter) + 1
  }
  return {result}
}

const phrase = 'Just because you say because doesnt mean because!';
// console.log(letterCounter(phrase));



const sumArray = (numbers) => {
  let result = 0;
  for (num of numbers){
    console.log(num);
    result = result + num;
  }
  return{result}
}
// const numbers = [5,10,15,20];
// console.log(sumArray(numbers));


// Use OF For numbers and IN For char


// Do it yourself

const NewSumArray = (numbers) => {
  result = 0;
  for(num of numbers){
    console.log(num);
    result = result + num;
  }
  return {result}
}

// const numbers = [3,6,9,12,15,18];
// console.log(NewSumArray(numbers));


const findMax = (numbers) => {
  let result = numbers[0];
  for(number of numbers){
    if(number > result){
      result = number
    }
  }
  return result;
}

// const numbers = [1,2,3,4,5];
// console.log(findMax(numbers));

const letterFrequency = (phrase) => {
  console.log(phrase);
  let frequency = {};
  for(const letter of phrase){
    if (letter in frequency){
      frequency[letter]++;
    } else {
      frequency[letter] = 1
    }
  }
  return frequency
}
// console.log(letterFrequency('haha'));

// incremental operators ++, -- , +=, -=