var currentNumber = 0;
var currentNumberWrapper = document.getElementById("currentNumber")

function increment() {
    
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber;
    validaNegativo(currentNumber);
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    validaNegativo(currentNumber);
}

function validaNegativo(a) {
    if (a <= -1) {
        currentNumberWrapper.style.color = "red";
    } else {
        currentNumberWrapper.style.color = "black";
    }
   
}