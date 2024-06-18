// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "123abs@gmail.com",
  fullname: {
    first: "idk1",
    last: "idk2",
  },
};

console.log(regularUser.fullname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
const obj4 = {
  4: "a",
  5: "b",
};

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = { ...obj1, ...obj2, ...obj4 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "123@",
  },
  {
    id: 1,
    email: "123@",
  },
  {
    id: 1,
    email: "123@",
  },
];

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js",
  price: "999",
  teacher: "nura",
};

console.log(course.teacher);

const { teacher } = course;

console.log(teacher);

//react

// const navbar = ({company}) => {

// }

// navbar(company = "idk4")

//API

// {
//     "name": "kkk",
//     "course": "jjj",
//     "price": "free"
// }

[{}, {}, {}];
