//Function Hoisting

// greet();
function greet()
{
    console.log("Hello");
}

//Variable Hoisting
// console.log(a); //undefined
// var a = 10;
//does not work in case of let and const keywords gives an reference error and also in function expression
// console.log(sayHello);
// let sayHello = function greet()
// {
//     console.log("Hello");
// }

//Function as first class citizens
// 1-> Assign to variable
// let greet = function()
// {
//     console.log("Hello");
// }
// 2-> Can be passed as an argument
// function sayHello(greet,firstName)
// {
//     greet();
//     console.log(firstName);
// }
// sayHello(greet,"Vanshika");

// 3-> Return function
// function multi()
// {
//     return function(num)
//     {
//         return num*num;
//     }
// }
// let ans = multi(); // behaves as a function
// let finalAns = ans(10);
// console.log(finalAns);

// 4-> used in data structure
// let arr = [
//      function(a,b)
//      {
//         return a+b;
//      },
//      function(a,b)
//      {
//         return a*b;
//      },
//      function(a,b)
//      {
//         return a-b;
//      }
// ]
// let a1 = arr[0];
// let ans = a1(5,10);
// console.log(ans);

//Can be defined as properties in objects
let obj =
{
     age : 20,
     weight : 50,
     greet : ()=>
     {
        console.log("Hello");
     }
};
obj.greet();