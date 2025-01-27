// let mainEle = document.createElement("div");
// mainEle.setAttribute("id", "mainBlock");

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");

// let image = document.createElement("img");
// image.src = "https://cdn.pixabay.com/photo/2024/11/27/07/51/woman-9227532_1280.jpg";
// image.width = 300;
// image.height = 300;
// image.style.objectFit = "cover";

// let bottomEle = document.createElement("div"); // Fixed typo
// bottomEle.setAttribute("class", "bottomBlock");

// let h1 = document.createElement("h1");
// h1.innerText = "GIRL";

// let btn = document.createElement("button");
// btn.innerText = "Click me";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle);


let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");

let gender = document.getElementsByName("gender");
// console.log(gender);

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";
    for(let i = 0;i<=gender.length-1;i++){
        // console.log(gender[i].value);
        // console.log(gender[i].checked);
        if(gender[i].checked == true){
            // console.log(gender[i].value);
            gen += gender[i].value;
        }
    };
    let userDetails={
        username:un,
        password:up,
        gender:gen

    };
    console.log(userDetails);
    sessionStorage.setItem("userData" ,JSON.stringify(userDetails) )

})
