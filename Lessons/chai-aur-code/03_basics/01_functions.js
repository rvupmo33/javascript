function sayMyName() {
  console.log("I");
  console.log("D");
  console.log("K");
}

// sayMyName();

function add2Nums(num1, num2) {
  const sum = num1 + num2;
  // console.log("The sum is being calculated...");
  return sum;
}

const sum = add2Nums(99, 1);

console.log("Result: " + sum);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("GET LOST!");
  } else {
    return `${username} just logged in!`;
  }
}

console.log(loginUserMessage("chen"));

function calcCartPrice(val1, ...num1) {
  return num1;
}

console.log("Prices:", calcCartPrice(220, 330, 440));

const user = {
  username: "jellyfish",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);
handleObject({
  username: "salmon",
  price: "free",
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
