let selectedFuel = "";

let fuelList = document.querySelectorAll(".fuel");
let modalWindow = document.querySelector(".modal__black");
let modalExit = document.querySelector(".modal__exit");
let modalRotate = document.querySelector(".modal__rotate");
let modalParts = document.querySelectorAll(".modal__part p");


let rotate = false;

fuelList.forEach((fuel)=>{
    fuel.addEventListener("click", ()=>{
        selectedFuel = fuel.querySelector(".fuel__head p").innerText
        modalWindow.classList.remove("_none");
    })
})

modalExit.addEventListener("click", ()=>{
    modalWindow.classList.add("_none");
})

modalRotate.addEventListener("click", ()=>{
    let buffer = modalParts[0].innerText;
    modalParts[0].innerText = modalParts[1].innerText
    modalParts[1].innerText = buffer
})