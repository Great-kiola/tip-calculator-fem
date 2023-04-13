console.log("Connected successfully!");

const reset = document.querySelector(".reset");
const resultAmount =document.querySelector("#resultAmnt");
const resultTotal = document.querySelector("#resultTotal");
const custom = document.getElementById("custom");
const peopleInput = document.getElementById("people-input");
const billInput = document.getElementById("bill-input");
const tipPercent = document.querySelectorAll(".btn");

tipPercent.forEach((tips) => {
    tips.addEventListener("click", function(e) {
        let tipvalue = e.target.innerText;
        console.log("tip value: " + tipvalue);
    });
    
});

reset.addEventListener("click", function(){
    resultAmount.innerHTML = "0.00";
    resultTotal.innerHTML = "0.00";
    custom.value = "";
    peopleInput.value = "";
    billInput.value = "";

});

