console.log("--------------Map function------------------");
//in the Map function we generate the new array with any operation

let arr = [1, 13, 5, 7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((value, index, array) => {
  return value ** 2;
});

console.log(newArr);

console.log("--------------Filter Function------------------");
//in the filter function we filter the array as per requrment

const greaterThanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
};
console.log(arr.filter(greaterThanSeven));

console.log("--------------Reduce function------------------");
//in the Reduce function generate the reduced for of array as per operation e.g add mult sub

let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b) => {
  return a * b;
};

console.log(arr2.reduce(red));
