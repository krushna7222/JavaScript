let str = new String(" Hellow - Krushna ");
let str1 = new String("How are you");

console.log(str);

let str2 = str.concat(str1); //cincat the two string join the two string
console.log(str2);

console.log(`${str} what about you ${str1} `); // join the two string using template literals

console.log(str.toLowerCase()); // convert the string to lower case
console.log(str.toUpperCase()); //convert the styring into upper case

console.log(str.length); //measure the length of string

console.log(str.trim()); //with the trim function remove the start and end whitespace of the string

console.log(str1.charAt(2)); //disply the character is positioned at index 2 of the string index no start with 0

console.log(str.replace("Krushna", "Hemraj")); //replace the character in the string with the other character

let splitedstring = str.split(""); //saparete each character of the string and return the array of character
console.log(splitedstring);

let repearstring = str.repeat(5);
console.log(repearstring); // By repeat function string repeat by given number

let reversedstring = splitedstring.reverse(); // reverse the string and return the array of character but first split operation required
console.log(reversedstring);

let joinedstring = reversedstring.join(""); //join the string by reverse order but first split and reverse operation required
console.log(joinedstring);

console.log(str1.indexOf("are")); //giv the index no of the character in the string if not found return -1

console.log(str1.search("are"));

document.write(str.bold()); //bold the string but in browser web page not in consol
document.write(str.sub()); //subscript string but in browser web page not in consol
document.write(str.sup()); //superscript string but in browser web page not in consol
