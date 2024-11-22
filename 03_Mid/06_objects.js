// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "random@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Krushna",
      lastname: "Shahane",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

const users = [
  {
    id: 1,
    email: "k@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "k@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "JAVA Full Stack",
  price: "40000",
  courseStudent: "Krushna",
};

// course.courseStudent

const { courseStudent: instructor } = course;

// console.log(courseStudent);
console.log(instructor);

// {
//     "name": "Krushna",
//     "coursename": "JAVA Full Stack",
//     "price": "40000"
// }

[{}, {}, {}];
