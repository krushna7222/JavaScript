// array
// In The JavaScript Array Any type of value can be passedto the array. It can be a number, string, boolean, object, array, null

console.log("--------------Array declaration------------------");

const myArr = [0, 1, 2, 3, 4, 5]; //Method of declaining Array
const myHeors = ["Krushna", "Hanuman", "Ram"];

console.log(myArr);
console.log(myHeors); //This is the array of string type

const myArr2 = new Array(1, 2, 3, 4); //This is also a method of declaining Array
console.log(myArr[1]); //this is the method of show the value present in index no 1 is diaplayed
console.log(myArr.length); //show the length of an array

console.log("--------------Array methods------------------");

myArr.push(6); //Push the value 6 in the array in last position
myArr.push(7); //Push the value 6 in the array in last position
console.log(myArr);

myArr.pop(); //Pop the last value from the array
console.log(myArr);

myArr.unshift(9); //Pust the value 9 in the array in first position
console.log(myArr);

myArr.shift(); //Pop the last value from the array in first position
console.log(myArr);

console.log(myArr.includes(9)); //check 9 is present in the array if present then return its index no else -1
console.log(myArr.indexOf(3)); //check the index no of given no

let arrtostr = myArr.toString(); //the array is converted into string
console.log(arrtostr);
console.log(typeof arrtostr);
const newArr = myArr.join("-"); //the array is display in without square brackets and saparated with passed type(-) its type is string

console.log(myArr);
console.log(newArr);

console.log("----------------slice, splice----------------");

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); //slice (Part of the array) the array from index no 1 to 3 but 3 index no is not includce in diasplayed array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); //Splice (Part of the array) the array from index no 1 to 3 and 3 index no is also includce in this diasplayed array but it is removed from the original array
console.log("C ", myArr);
console.log(myn2);

/*Difference between in slice and splice

- slice() creates a shallow copy of a portion of an array and returns a new array without modifying the original array.
- splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

in splice method the array is modified by removing elements from the original array

Both methods return the removed elements.

*/
