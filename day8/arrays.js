// let user1 = "Harsha";
// let user2 = "Prajit";
// let user3 = "Prabhakar";
// let user4 = "Shailaja";

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);



// let users = ["Praharsha", "Prajit", "Prabhakar", "Shailaja"];
// console.log(users);
// console.log(users[2]);
// console.log(users[1]);


// for(let i= 0; i<users.length; i++)
// {
//     console.log(users[i]);
// }


let users = ["Praharsha", "Prajit", "Prabhakar", "Shailaja"];
// users.map((user, i)=>{
//     console.log(user , i);
// });


// let x = users.map((user, i)=>{
//     return user;
// });
// console.log(x);

// let x = users.forEach((user, i)=>{
//     // console.log(user);
//     return user;
// });
// console.log(x);


// let userdetails = {
//     name: "Praharsha",
//     age:19,
//     city:"Nizamabad"
//     };
//     console.log(userdetails);
//     console.log(userdetails.name);
//     console.log(userdetails.city);


// ! nested object

// let userDetails = {
//     name :"Akshay",
//     age:22,
//    address:{
//     city:"Hyderabad",
//     area:"siddipet",
//     streetNo : 123,
//     pincode : {
//         pin1:123456,
//         pin2:654321
//     }
//    }
// };
// console.log(userDetails.name);
// console.log(userDetails.address.city);
// console.log(userDetails.address.pincode.pin1);



// ! create array of objects

// let user1 ={
//     name:"sathvik",
//     city:"Karimnagar"
// }

// let user2={
//     name:"Raghu",
//     city:"ananthpur"
// }

// let user3={
//     name:"Shilpa",
//     city:"Kammam"
// }

// let user4={
//     name:"Bharath",
//     city:"Sathupalli"
// }

// console.log(user1.name);
// console.log(user2.name);




let userDetails =[
    {
        name:"sathvik",
        city:"Karimnagar"
    },
    {
        name:"Raghu",
        city:"ananthpur"
    },
    {
        name:"Shilpa",
        city:"Kammam"
    },
    {
        name:"Bharath",
        city:"Sathupalli"
    }
];

userDetails.map((user)=>{
console.log(user.name);
})