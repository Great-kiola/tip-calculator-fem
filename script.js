console.log("Connected successfully!");

const reset = document.querySelector(".reset");

const resultAmount = document.querySelector("#resultAmnt");
const resultTotal = document.querySelector("#resultTotal");

const custom = document.getElementById("custom");
const peopleInput = document.getElementById("people-input");
const billInput = document.getElementById("bill-input");

const tips = document.querySelectorAll(".btn");

/* 
This is the block that all the bill and people inputs
are declared.
*/
billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);

tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});

let billValue = "0";
let peopleValue = "2";
let tipValue = "0.15";

function billInputFun() {
  billValue = parseFloat(billInput.value);
  console.log("billValue: " + billValue);
  resultAmount.innerHTML = billValue;

    calculateTip();
}

function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value);
  console.log("peopleValue: " + peopleValue);
    calculateTip();
}

// tips percentage
function handleClick(event) {
  tips.forEach(function (val) {
        if (event.target.innerHTML === val.innerHTML) {
        tipValue = parseFloat(val.innerHTML) / 100;
        calculateTip();
        }

    });

}

// calculate tips
function calculateTip() {
  if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue * tipAmount) / peopleValue;

        resultAmount.innerHTML = total.toFixed(2);
        resultTotal.innerHTML = tipAmount.toFixed(2);
    }
}



// Resets all Inputs
reset.addEventListener("click", function () {
  resultAmount.innerHTML = "0.0";
  resultTotal.innerHTML = "0.0";
  custom.value = "";
  peopleInput.value = "";
  billInput.value = "";
});
