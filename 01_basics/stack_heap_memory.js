//********* stack(Peimitive)  heap(Non-Primitive) ****************

// primitive value is store in the stack and Non-Primitive value is stored in heap.

let a = 10; // primitive value is stored in stack
let b = a;

b = 20;

console.log(a);
console.log(b);

let myInfo = { name: "Krishna", email: "krushna2003@gmail.com", age: 21 }; // Non-Primitive value is stored in heap
let myInfo2 = myInfo;

myInfo2.email = "krushnashahane263@gmail.com";
console.log(myInfo);
console.log(myInfo2);

//the output is same in both cases krushnashahane263@gmail.com
