//  **************Primitive***********************

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

let name = "krushna shahane"; //string
const score = 100; //number
const scoreValue = 100.3; //number

const isLoggedIn = false; //boolean
const outsideTemp = null; //object
let userEmail; //undefined

const id = Symbol("123"); //symbol
const anotherId = Symbol("123"); //symbol

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n; //bigint

// ************Reference (Non primitive)************************

// Array, Objects, Functions

const heros = ["Krushna", "Hemraj", "Yash"]; //object array
let myObj = {
  //object
  name: "Krushna",
  age: 21,
};

const myFunction = function () {
  //function
  console.log("Hello world");
};

console.log(typeof name);

// https://262.ecma-international.org/5.1/#sec-11.4.3
