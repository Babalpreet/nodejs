
//  var,cost,let

// function exampleFunction(){
//     if(true){
//         let functionScopedVar="I am a function scoped";
//         console.log(functionScopedVar);
//         let functionScopedVar="hi ji";
//         console.log(functionScopedVar);
// 5
        
//     }

// }
// exampleFunction();
// // console.log(functionScopedVar);


// shadowing

// let shadowedVar="I am Global";
// function exampleFunction(){
//     let shadowedVar="I am local";
//     console.log(shadowedVar);
// }
// exampleFunction();
// console.log(shadowedVar);

// ----hoisting
// console.log(x);// undefined
// // let x =10;
// console.log(x); //10

// hoisting happens with Var , but it will throw undefined
// hoisting happens with let , but it will throw a different error


// data types
// let a="hello ji kida";
// let b=", hor sabh theek ?";
// console.log(a);
// console.log(a+b);
// // console.log(a-b);
// // console.log(a*5);
// console.log(typeof(a));
// let c=1.45,d=2.56;
// console.log(c+d);

// object

// let person ={
//     name: "Alice",
//     age:30,
//     isStudent:false
    
// };
// console.log(person.name);


// let car=[ 1,"audi","volvo","VW"];
// console.log(car);
// console.log(car[3]);

const delayedFunction = () => {
    console.log("Delayed function");

};

setTimeout(delayedFunction,2000);

















