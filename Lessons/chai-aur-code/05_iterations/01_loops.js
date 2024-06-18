// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("this is a quick intermission!")
  }
  // console.log(element);
}

for (let i = 0; i <= 10; i++) {
  // console.log("-----------------------");
  // console.log(`| outer loop value ${i} |`);
  // console.log("-----------------------");
  for (let j = 0; j <= 3; j++) {
    // console.log(i+ ' * ' + j + ' = ' + (i*j));
  }
}

let myArray = ["batman", "flash", "superwomen"];
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log(element)
}

// break and continue

for (let p = 0; p <= 20; p++) {
  if (p == 5) {
    console.log(`5 Has been detected: Shutting down loop...`);
    break;
  }
  console.log(`Value is currently ${p}`);
}

for (let p = 0; p <= 20; p++) {
  if (p == 5) {
    console.log(`5 Has been detected: Analyzing...`);
    continue;
  }
  console.log(`Value is currently ${p}`);
}
