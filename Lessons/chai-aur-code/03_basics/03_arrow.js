const user = {
    username: "rando1",
    price: 2,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to our website!`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "rando1gonemad"
// user.welcomeMessage();


// console.log(this);

// function chai(){
//     let username = "jellyfish"
//     console.log(this.username);
// }

// chai();

// const chai = function () {
//     let username = "jellyfish"
//     console.log(this.username);
// }

// chai()

//arrow functions

const chai = ()  => {
    let username = "jellyfish"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1,num2) => ({username: "jellyfish"})

// console.log(addTwo(3,4));

// const myArr = [2,5,6,7,8];

// myArr.forEach(() => {});