//singleton

//object literals

// const mySym=Symbol("key1")
// const Jsuser={
//     name:"hitesh",
//     "Full name ":"hitesh Chadary",
//     age:18,
//     [mySym]:"key2",
//     location:"jaipur",
//     email:"hitesh@gmail.com",
//     isloggin:false,
//     lastLoginDays:["Moday","Saturday"]

// }
// console.log(Jsuser.email);
// console.log(Jsuser["Full name "]);
// console.log(Jsuser[mySym]);

// Jsuser.email="ompanchal@gmail.com"
// Object.freeze(Jsuser)
// Jsuser.email="hitesh@gmail.com"
// console.log(Jsuser);

// Jsuser.geeting= function(){
//     console.log("Hellow Js user");
// }
// console.log(Jsuser.geeting());

// Jsuser.geetingtwo= function(){
//     console.log(`Hellow Js use , ${this.name}`);
// }
// console.log(Jsuser.geetingtwo());


// const tinderuser=new Object()
// const tinderuser={}
// tinderuser.id="1234abc"
// tinderuser.name="Summy"
// tinderuser.isloggin=false
// // console.log(tinderuser);

// const reglure={
//     email:"Sujal@gmail.com",
//     fullname:
//     {
//         firstname:"hitesh",
//         lastname:"patel"
//     }
// }
// console.log(reglure.fullname.firstname);

// const obj1 ={1:"a",2:"b"}

// const obj2 ={1:"c",2:"d"}

// const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnproperty('isLoggedIn'));


//----------------part 3--------- //

const course={
    course:"js in hindi",
    price:"999",
    courseIntructer:"hitesh"
}

const {courseIntructer:insrtuctor}=course
console.log(insrtuctor);

[
    {},
    {},
    {}
]