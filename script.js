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

custom.addEventListener ("input", tipCustomFun);

let billValue = "";
let peopleValue = "";
let tipValue = "";

function billInputFun() {
  billValue = parseFloat(billInput.value);
  calculateTip();

}

function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value);
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


// Custom 
function tipCustomFun(){
    tipValue = parseFloat(custom.value /100);
    calculateTip();

}

// calculate tips
function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue * tipAmount) / peopleValue;

    resultAmount.innerHTML = tipAmount.toFixed(2);
    resultTotal.innerHTML = total.toFixed(2);
  }
}

// Resets all Inputs
reset.addEventListener("click", function () {
  resultAmount.innerHTML = "0.00";
  resultTotal.innerHTML = "0.00";
  custom.value = "";
  peopleInput.value = "";
  billInput.value = "";
});
