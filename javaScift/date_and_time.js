//date

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate=new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString());

let myTimeStape=Date.now()

console.log(myTimeStape);
console.log(myCreatedDate.getTime());