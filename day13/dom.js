let bgColor = document.querySelectorAll(".bgColor");
// console.log(bgColor);
[...bgColor].map(element=>{
    // console.log(element);
    element.addEventListener("mouseover",()=>{
        // console.log(element.innerText);
        element.style.backgroundColor = element.innerText;
    });
    element.addEventListener("mouseleave",()=>{
        // console.log(element.innerText);
        element.style.backgroundColor = "transparent";
    })
})