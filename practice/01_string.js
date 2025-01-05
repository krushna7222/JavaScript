let str = new String("Hey Hellow Krishna");
let str1 = new String(" I Am Fine ");

// Finding Length oif the string
console.log(str.length);
console.log(str1.length);

// Joion The String By Concat function
console.log(str.concat(str1));

// Print The String character with 4 and end with 10
console.log(str.slice(4, 10));

// split the string in saparate character
let splitstr = str.split("");
console.log(splitstr);

// Reverse the split string
let reversestr = splitstr.reverse();
console.log(reversestr);

// Join the reversed string then see reversed string
console.log(reversestr.join(""));

// Fing the index no of character if dose not exist this character then output is -1
console.log(str.indexOf("K"));

// By trim function remove the start and end whitespaces
console.log(str1.trim());

// By repeat function string repeat by given number
console.log(str1.repeat(5));

// By CharAt function we find the character index no by given no
console.log(str.charAt("15"));

// change the upper case to lower case and lower cxase to upper case
console.log(str.toUpperCase());
console.log(str1.toLowerCase());

// Search the character by given index no if yes they output true else they output false
console.log(str.includes("K", 11));

console.log(str.normalize());

let userInputName = "krushna shahane";
console.log(userInputName.toLocaleLowerCase());

// Check The String is Palindrome or not

let userInput = prompt("Enter the string to check its palindrome or not :");
let reverceString = userInput.split("").reverse();
let resultString = reverceString.join("");

if (userInput === resultString) {
  alert("This String is a palindrome");
} else {
  alert("This String is not a palindrome");
}
