// Primitive

// 7 types : String, number, boolean, null, undefined, symbol, bigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

const bigNumber = 34343434433n;


// Reference(Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "nura",
    age: 18,
}
const myFunction = function() {
    console.log("Hiya!!");
}

// +++++++++++++++++++++++++

// Stack (primitive), Heap (non-primitive) 

let myYtName = "nura";

let anothername = myYtName;
anothername = "loverGirl"

console.log(myYtName);
console.log(anothername);

let user1 = {
    email: "user1@google.com",
    upi: "user1@ybl"
}

let user2 = user1

user2.email = "nura@google.com";

console.log(user1.email);
console.log(user2.email);