//if statment
console.log("--------------if statment------------------");

const age = 21;
if (age >= 18) {
  console.log("your age is more than 18 ");
}

//if-else statment
console.log("--------------if-else statment------------------");

const isUserloggedIn = true;
const temperature = 41;

if (temperature === 40) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}

console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// Scope of variable
console.log("----------------Check the scope of variable----------------");

const score = 200;

if (score > 100) {
  let power = "fly";
  var anotherpower = "wings";
  console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); //let varible is not globle scope that reason this line is not executed
console.log(`User power: ${anotherpower}`); //var varible is globle scope that reason this line is executed

//if-else nested statment
console.log("--------------if-else nested statment------------------");

let mark = 95;

if (mark >= 80) {
  console.log("You are in A Grade");
  if (mark >= 90) {
    console.log("You are eligible for scolership");
  } else {
    console.log("You are not eligible for scolership");
  }
} else {
  console.log("You are in B Grade");
}

//if-else-if statment
console.log("--------------if-else-if statment------------------");

const balance = 1000;

// if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
