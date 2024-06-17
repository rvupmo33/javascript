const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc: ${acc}`);
//     console.log(`currVal: ${currVal}`);
//     return acc + currVal;
// }, 0);

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemname: "js",
        price: 299
    },
    {
        itemname: "ruby",
        price: 50
    },
    {
        itemname: "cpp",
        price: 140
    }
]

const shopTotal = shoppingCart.reduce((acc, item)=> acc + item.price,0)

console.log(shopTotal);