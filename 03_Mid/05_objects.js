// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Krushna",
  "full name": "Krushna Shahane ",
  [mySym]: "mykey1",
  age: 21,
  location: "Nashik",
  email: "krushna@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "krushna@chatgpt.com";

// Object.freeze(JsUser)  //Using the frees function frees the data of the object we can not chane the data in the object
JsUser.email = "krushna@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); //usingf the this keyword we can acces the values key in the object
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
