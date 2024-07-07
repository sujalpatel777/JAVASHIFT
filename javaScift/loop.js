// for (let index = 1; index < 10; index++) {
//     const element = index;
//     if(element==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

// while loop
// const i=0
// while (i<10) {
//     i++
//     console.log(i);
// }

const arr=[1,2,3,4,5]
for (const num of arr){
    console.log(num);
}

//mp 
// const map=new Map()
// map.set('In',"India")
// map.set('usa',"united state of america")
// map.set('fr',"franch")

// for (const [key,value] of map){
//     console.log(key,":-",value);
// }

const myobject={
    js:"javascipt",
    cpp:"c++",
    rb:"ruby",
    py:"python"
}

for (const key in myobject){
    console.log(myobject[key]);
}