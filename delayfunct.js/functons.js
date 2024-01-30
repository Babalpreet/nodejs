// arrow function?





//--------------- delayed function

// const delayedFunction = () => {
//     console.log("Delayed function");

// };

// setTimeout(delayedFunction,2000);



// ---------------interval function

// const repeatFunction=()=>{
//     console.log("Repeated function");
// }

// const intervalId = setInterval(repeatFunction,10);

// // --clearInterval (to stop stintrval)

// setTimeout (() =>
// { clearInterval(intervalId);
//     console.log("Interval stopped");

// }, 5000); // setTimeout here is already a method taking 2 parameters,-
//           // -clearInterval and time after which repetition is to be stopped


// callback function



// function parentFunction(name,callback){
//     callback();
//     console.log("hey "+ name);
// }

// function randomFunction(){
//     console.log("Hey i am callbackfunction");
// }

// parentFunction("Random string", randomFunction);

// --------------function with delay

// function parentFunction(name,callback){
//     setTimeout(callback,1000);
//     console.log("hey "+ name);
// }

// function randomFunction(){
//     console.log("Hey i am callbackfunction");
// }

// parentFunction("Random string", randomFunction);

// --- anotherway to write a function

function parentFunction(name,callback){
    setTimeout(callback,1000);
    console.log("hey "+ name);
}


parentFunction("Random string", function randomFunction(){     // we can also declare a function inside another function's parameter
    console.log("Hey i am callbackfunction");
});

