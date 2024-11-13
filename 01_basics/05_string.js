const name = "krushna";
const age = 50;

// console.log(name + age + " Value");

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String("krushna-laxman-shahane");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   krushna    ";
console.log(newStringOne);
console.log(newStringOne.trim()); //trim is remove white spaces

const url = "https://krushna.com/krushna%20shahane";

console.log(url.replace("%20", "-")); //%20 replace with -

console.log(url.includes("krushna"));
console.log(url.includes("hemraj"));

console.log(gameName.split("-"));
