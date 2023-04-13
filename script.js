console.log("Connected successfully!");

const reset = document.querySelector(".reset");
const resultAmount =document.querySelector("#resultAmnt");
const resultTotal = document.querySelector("#resultTotal");
const custom = document.getElementById("custom");
const peopleInput = document.getElementById("people-input");
const billInput = document.getElementById("bill-input");
const tipPercent = document.querySelectorAll(".btn");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tipPercent.forEach(function(val) {
    val.addEventListener("click", handleClick);
});

function billInputFun () {
    billValue = parseFloat(billInput.value);
    console.log("billValue: " + billValue);
}

function peopleInputFun () {
    peopleValue = parseFloat(peopleInput.value);
    console.log("peopleValue: " + peopleValue);
}

function handleClick () {
    
}

reset.addEventListener("click", function(){
    resultAmount.innerHTML = "0.00";
    resultTotal.innerHTML = "0.00";
    custom.value = "";
    peopleInput.value = "";
    billInput.value = "";

});

