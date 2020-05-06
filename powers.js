document.querySelector("#activate-flight").addEventListener("click", function (){
    document.querySelector("#flight").classList.toggle("enabled")
})

document.querySelector("#activate-mindreading").addEventListener("click", function (){
    document.querySelector("#mindreading").classList.toggle("enabled")
})

document.querySelector("#activate-xray").addEventListener("click", function (){
    document.querySelector("#xray").classList.toggle("enabled")
})

let activateAllButton = document.querySelector("#activate-all")

activateAllButton.addEventListener("click", function() {
    let allPowerButton = document.querySelectorAll(".power")
    for (let index = 0; index < allPowerButton.length; index++) {
        allPowerButton[index].classList.add("enabled")
        
    }})

let deActivateAllButton = document.querySelector("#deactivate-all")
deActivateAllButton.addEventListener("click", function() {
    let noAllPowerButton = document.querySelectorAll(".power")
    for (let index = 0; index < noAllPowerButton.length; index++) {
        noAllPowerButton[index].classList.remove("enabled")
    }})
    