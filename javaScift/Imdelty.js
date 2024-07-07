///IIFE  global scope polution ko hatane ke liye use hota hai
 
(function chai(){
    console.log(`DB connnected`);
})();

((name)=>{
    console.log(`DB connected two ${name}`);
})('hitesh')