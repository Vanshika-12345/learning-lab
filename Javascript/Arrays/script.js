// let obj = {
//     "Full name" : "Vanshika hehe",
//     age : 21,
//     weight : 52,
//     greet: function()
//     {
//         console.log("Hello ji");
//     }
// };
// console.log(obj);
// obj.greet();

// Arrays
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let brr = Array('hi',1,true);
// console.log(brr);
// console.log(typeof(arr));
// console.log(typeof(brr));
// console.log(brr[1]);

//Methods for array - built in
// arr.push(6);
// arr.push(20);
// arr.push(40);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('Vanshika');
// console.log(arr);
// arr.slice(2,4);
// console.log(arr);
// arr.splice(1,2,'kunal');

//Map
// let arr = [10,20,30];
// let ansArr =  arr.map((number) => 
// {
//     return number*number;
// })
// console.log(ansArr);

//Filter
let arr = [10,20,30,11,21,44,51];
// let evenArr = arr.filter((number) =>
// {
//     if(number%2===0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// });
// console.log(evenArr);

//Reduce
let ans = arr.reduce((acc,curr)=>
{
    return acc+curr;
},0)
console.log(ans);