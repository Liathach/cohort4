import functions from './functions.js';

// **********
//
// Add the event listeners
// 

// idNumber.addEventListener('change', (() => {
//     idNumberSize.textContent = functions.size(idNumber.value);
// }));


Add.addEventListener('click', (() => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("output").value = functions.add(num1, num2);
}));

Subtract.addEventListener('click', (() => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    output.value = functions.subtract(num1, num2);
}));

Multiply.addEventListener('click', (() => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    output.value = functions.multiply(num1, num2);
}));

Divide.addEventListener('click', (() => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    output.value = functions.divide(num1, num2);
}));
