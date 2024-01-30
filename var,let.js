// let && const are both block level scoped in const we cannot change its value afterwards
// var function level scope
// hositing with var

// function example(){
//     if(true){
//         var functionScoped="i am function-scoped";
//     }
//     console.log(functionScoped);
// }
// example();

// console.log(functionScoped);


// function example(){
//     if(true){
//         let functionScoped="i am function-scoped";
//     }
//     console.log(functionScoped);
// }
// example();

// console.log(functionScoped);


//--------------re-declatration-----
// var a=100;
// var a=150; // re-decleration in var

// let a=10;
// let a=100; // cnat re-declare in let, ie better constrains

// -------------hoisting

// console.log(x);
// let x=5;           //let and consst are having same behaviour
// console.log(x);


// console.log(y);


// console.log(z);
// var z=10;
// console.log(z);


// ------------hoisting with function

// hello();

// function hello(){
//     console.log("Hello, world");
// }

/// -----------------------object data types

let person ={

    name:"bob",
    age:30,
    isStudent: false 
};
console.log(person.name);
console.log(person);


//    -----------Array
 let fruits= [1,"banana","orange"];
 console.log(fruits[0]);


 // ------- type Coercion
 let result = 5+"5";
 console.log(result);

 let a="2"+"2";
 console.log(a);
 console.log(typeof(a));// string

 let b="2"+"2"-"2";
 console.log(b);
 console.log(typeof(b));// number