// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);

// console.log(arr.length);
// console.log(arr.slice(0, 4));
// console.log(arr.splice(0, 6));
// console.log(arr);

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// var larr = arr.length;

// console.log("Original Array: ", arr);
// console.log("Length of the array: ", larr);

// var slicearr = arr.slice(3, 7);

// console.log("Sliced Array: ", slicearr);

// var splicearr = arr.splice(3, 3, 4, 5, 6);

// console.log("Spliced Array: ", splicearr);

// console.log("Updated Array: ", arr);

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i in arr) {
  arr[i] = arr[i] + 10;
  console.log(arr[i]);
}

// console.log(arr);
