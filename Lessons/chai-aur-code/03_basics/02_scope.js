let a = 300;
let b = 200;
if (true) {
  let a = 10;
  const b = 20;
  console.log("INNER a: ", a);
}

// console.log(a,b);

function one() {
  const username = "jellyfish";

  function two() {
    const website = "youtube";
    console.log(username, " is on ", website);
  }
  two();
  console.log("yes... ", website);
}

one();

if (true) {
  const username = "green";
  if (username === "green") {
    const website = " youtube";
    console.log(username + website);
  }
  console.log(website);
}

console.log(username);

// +++++++++ interesting ++++++++++++

function addone(num) {
  return num + 1;
}

console.log(addone(5));

const addtwo = function (num) {
  return num + 2;
};

console.log(addtwo(2));
