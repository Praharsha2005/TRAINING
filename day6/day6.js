function hof(a){//higher order function
    return a();
}

// let x = hof(function(){return "Callback function"})//callback function
// console.log(x())//output: Callback function




let y= function(){return "callback function"};
console.log(y());

let users = ["Manoj","Amar","Anand","Harsha"];
console.log(users);
users.map(function(user){console.log(user)})


var a = 10;
let b = 45;
function x(){
    var user = 'Praharsha';
    let company = 'Amazon'
    const sal = 100000
    console.log(user)
    console.log(company)
    console.log(sal)
    console.log(a,b)

}x()





