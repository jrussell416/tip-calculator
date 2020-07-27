
function tipTotal() {
let billAmount = document.getElementById("amount").value;
let numberOfPeople = document.getElementById("numOfPeople").value;
let tipAmount = document.getElementById("service").value;

if (billAmount === "0" || billAmount === "") {
        alert("Enter Bill Amount")
    } else if (numberOfPeople === "0" || numberOfPeople === "") {
        alert("Enter number of people splitting the tip");
    } else {
    let tipMath = billAmount * tipAmount / numberOfPeople ;
document.getElementById("placehold").innerHTML = "TIP AMOUNT: <br>" + "$ " + tipMath.toFixed(2) + "<br>Per person";
}
}