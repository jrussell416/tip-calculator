

function tipTotal() {
let billAmount = document.getElementById("amount").value;
let numberOfPeople = document.getElementById("numOfPeople").value;
let tipAmount = document.getElementById("service").value;
let tipMath = billAmount * tipAmount / numberOfPeople ;
document.getElementById("placehold").innerHTML = "TIP AMOUNT: <br>" + "$ " + tipMath + "<br>Per person";
}