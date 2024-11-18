var c = 40; //var is globle scope variable var can be updated and re-declare
let b = 30; //let is block scope variable let can be updated can not be re-declare
const a = 20; //const is block scope variable let can not be updated or can not be re-declare

var myname = "Krushna Shahane";
var myname = "krushna Shahane Patil"; //Name Is Changable wioth the var keyword

console.log("The Value Of A Is :" + a);
console.log("The Value Of B Is :" + b);
console.log("The Value Of C Is :" + c);
console.log("My Name Is :" + myname);

b = 50;
console.log("The Updated Value Of B Is :" + b);

//const a=50 // the const a is  declaired first this is not changable with const keyword this is drawback of const keyword

//let b=40; // the let b is already declaided first  this is not changable in java script

var c = 50; // the var c is already declaided first but this is changable in java script
console.log(c);

console.table([a, b, c]); //using the table we are printing the outpun in table format

console.log("---------------------Scope of variables-------------------------");

var u = 50; //var is globle scope variable var can be updated and re-declare
let v = 60; //let is block scope variable let can be updated can not be re-declare
const w = 70; //const is block scope variable let can not be updated or can not

function checkscope() {
  var x = 10;
  let y = 20;
  const z = 30;
  console.log("Inside The Function : X = " + x);
  console.log("Inside The Function : Y = " + y);
  console.log("Inside The Function : Z = " + z);
  console.log("Outside The Function : U = " + u);
  console.log("Outside The Function : V = " + v);
  console.log("Outside The Function : W = " + w);
}
checkscope();
console.log("----------------------------------------------------------------");

console.log("Outside The Function : U = " + u);
console.log("Outside The Function : V = " + v);
console.log("Outside The Function : W = " + w);
// console.log("Outside The Function : X = " + x);
// console.log("Outside The Function : Y = " + y);
// console.log("Outside The Function : Z = " + z);
