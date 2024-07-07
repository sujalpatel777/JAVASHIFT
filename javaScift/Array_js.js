// const MyArr=[0,1,2,3,4]
// console.log(MyArr);

// const Myheros=['spiderman','naagraj']

// const MyArr2=new Array(1,2,3,4,5)
// console.log(MyArr2[1]);

// array method 

// MyArr.push(6)
// MyArr.pop(2)
// console.log(MyArr);

// MyArr.unshift(9)
// MyArr.shift()

// console.log(MyArr.includes(9));
// console.log(MyArr);
// console.log(MyArr.index(2));


//slice,splice

// console.log("a",MyArr);
// const myn1=MyArr.slice(1,3)
// console.log(myn1);
// console.log("b",MyArr);

// const myn2=MyArr.splice(1,3)
// console.log("C",MyArr);
// console.log(myn2);

/// part 2 //
const marvel_heros=['thor','Ironman','spiderman']
const dc_heros=['superman','flash','batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros);

const another_array=[1,2,3,4,[4,5,7],[1,2,3,[1,2,3]]]
const real_anothor_array=another_array.flat(Infinity)
console.log(real_anothor_array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"}));// interting 

let Score1=100
let Score2=300
console.log(Array.of(Score1,Score2));