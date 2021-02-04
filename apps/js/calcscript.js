//Calculation functions
function Add(inputA, inputB) {
    var inputA = document.getElementById("inputA");
    var inputB = document.getElementById("inputB");
    var result = Number(inputA.value) + Number(inputB.value);
    document.getElementById("display").innerHTML = result;
}
function Sub(inputA, inputB) {
    var inputA = document.getElementById("inputA");
    var inputB = document.getElementById("inputB");
    var result = Number(inputA.value) - Number(inputB.value);
    document.getElementById("display").innerHTML = result;
}
function Mult(inputA, inputB) {
    var inputA = document.getElementById("inputA");
    var inputB = document.getElementById("inputB");
    var result = Number(inputA.value) * Number(inputB.value);
    document.getElementById("display").innerHTML = result;
}
function Div(inputA, inputB) {
    var inputA = document.getElementById("inputA");
    var inputB = document.getElementById("inputB");
    var result = Number(inputA.value) / Number(inputB.value);
    if (inputB == 0) {
        document.getElementById("display").innerHTML = "Invalid";
    }
    else {
        document.getElementById("display").innerHTML = result;
    }
}