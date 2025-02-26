// ****************Dates****************************

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
});

// var date = new Date();

// console.log(date.toString());

let date = new Date();

// console.log(date.getMonth() + 1);

let newdate = new Date("2024-12-31");

console.log(newdate.toString());
console.log(newdate.getTime()); //the Ouput is give in milisecond
console.log(newdate.getTime() / 1000); //the Ouput is give in second
console.log(date.getMilliseconds());
console.log(
  date.toLocaleString("default", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric", // 24-hour time
    // timeZone: "America/New_York", // Timezone name
  })
);
