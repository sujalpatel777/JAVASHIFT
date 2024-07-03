// const User={
//     username:"hitesh",
//     price:999,

//     welocomeMessage:function(){
//        console.log(`${this.username},welcome to website`);
//     }
// }
// User.welocomeMessage()
// User.username="sam"
// User.welocomeMessage()

// console.log(this);

// function chai(){
//     let useraname="hitesh"
//     console.log(this.useraname);
// }
// chai()

const chai= ()=>{
    let useraname="hitesh"
    console.log(this);
}

// chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

// const addtwo=(num1,num2)=> num1+num2
const addtwo=(num1,num2)=>({useraname:"hitesh"})
console.log(addtwo(5,2));
