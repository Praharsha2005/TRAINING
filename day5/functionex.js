//! without parameters

function demo(){
    console.log("function is executing")
}
demo();


//Function with parameters and arguments
//let a = 10; // a = parameter, 10=arguments
5,6
8,9
3,4
function add(a,b){
    console.log(a+b);
}
add(5,6);
add(8,9)
add(3,4)

//FUNCTION EXPRESSION
let x = function(){
    console.log("anonymous function is executing");
}
x();

//IIFE
(
    function (){
        console.log("IIFE is executing");
    }
)()

//IMPLICIT RETURNS AND EXPLIXIT RETURNS

function test1(a,b){
    return a+b
}
console.log(test1(5,6))

let p = (a,b) => {return a*b};
console.log(p(5,5));

let y = (a,b) => a+b;
console.log(y(100,200));


