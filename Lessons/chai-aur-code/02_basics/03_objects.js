// singleton
// //Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "nura",
    "fullname": "nura idk",
    [mySym]: "mykey1",
    age: 18,
    location: "Mississauga",
    email: "nura@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["tuesday", "thursday"]
}

console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);
JsUser.email = "macroflop";
// Object.freeze(JsUser);
JsUser.email = "microflop";
console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log("Hello love");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, your new name is ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());