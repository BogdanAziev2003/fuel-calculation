let selectedFuel = "";

let fuelList = document.querySelectorAll(".fuel");
let modalWindow = document.querySelector(".modal__black");
let modalExit = document.querySelector(".modal__exit");

fuelList.forEach((fuel)=>{
    fuel.addEventListener("click", ()=>{
        selectedFuel = fuel.querySelector(".fuel__head p").innerText
        modalWindow.classList.remove("_none");
    })
})

modalExit.addEventListener("click", ()=>{
    modalWindow.classList.add("_none");
})