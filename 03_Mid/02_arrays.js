const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); //in this method push the dc_heros array into marvel_heros array at last index

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //in this method we find the value of inner array of array by index no

const allHeros = marvel_heros.concat(dc_heros); //in this method we merge two array into one array in proper manner
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; //this method is split method in this type multiple array display in omne array display merge the array

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); //in the flat method solve the array in array in array format arrays
console.log(real_another_array);

console.log(Array.isArray("Krushna")); // check this is array or not
console.log(Array.from("Krushna")); //creat ethe array from provided value
console.log(Array.from({ name: "Krushna" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //by using the .of function create a new array with multiple values
