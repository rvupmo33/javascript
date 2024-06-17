const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is a shortcut for ${myObject[key]}`);
}

const coding = ['js','ruby','java','python','cpp'];

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
// console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item,index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        lang: "javascript",
        file: "js"
    },
    {
        lang: "java",
        file: "java"
    },
    {
        lang: "python",
        file: "py"
    }
]

myCoding. forEach((item) => {
    console.log(item.lang);
})