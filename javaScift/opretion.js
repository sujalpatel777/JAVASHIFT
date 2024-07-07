// let value=3
// let negvalue=-value
// console.log(negvalue);

// console.log(2*2);
// console.log(2+2);
// console.log(2/2);
// console.log(2-2);

// // * comapare the datatypes * //
// console.log("2" > 1);
// console.log("02">1);

// console.log(null >= 0);
// console.log(null == 0);
// console.log(null <= 0)

// primitive 

// 7 types: string,number,Bolearn,null,undefined,symbol,bigInt

//referece (Non primitive)

// Array,object,function
const heros=["shaktiman","naagrag","doga"]
let myObj={
    name:"hitesh",
    age:22
}
const myFunction=function () {
  console.log("hellow world")
}

// console.log(typeof )
//  stack(primitive),heap(Non_primitive)

let myYoutubename="hiteshchodeshafecome"
let anothername=myYoutubename
anothername="chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne={
    email:"sujal191234@gmail.com",
    upi:"user@ybl"
}
let usetwo=userOne
usetwo.email="hitesh@gamil.com"

console.log(userOne.email);
console.log(usetwo.email);

//  this is string //
const gamename= new String('hite-sh')
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase);
console.log(gamename.charAt('A'));
console.log(gamename.indexOf('t'));

// // .trim
//    .slice
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
//.replace
//.includes
//.spilt
console.log(gamename.split('-'));
