//Spread Operator
let src = 
{
    age : 13,
    weight : 40,
    name : "Hello"
}
// let dest = {...src};
// src.age = 12;
// console.log("source :" ,src);
// console.log("destination :" ,dest);
// console.log(obj);

//Assign Method
// let src2 =
// {
//     value : 101,
//     grade : "A"
// };
// let dest = Object.assign({},src,src2);
// src.age = 90;

//Iteration Method
let dest = {};
for(let key in src)
{
    let newKey = key;
    let newValue = src[key];
    dest[newKey] = newValue;
}
console.log("source :" ,src);
console.log("destination :" ,dest);