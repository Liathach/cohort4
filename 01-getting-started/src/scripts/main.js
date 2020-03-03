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
    console.log(num1);
    console.log(num2);
    console.log(functions.add(num1, num2));
    document.getElementById("output").value = functions.add(num1, num2);
}));

Subtract.addEventListener('click', (() => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    console.log(num1);
    console.log(num2);
    console.log(functions.subtract(num1, num2));
    output.value = functions.subtract(num1, num2);
}));

Multiply.addEventListener('click', (() => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    console.log(num1);
    console.log(num2);
    console.log(functions.multiply(num1, num2));
    output.value = functions.multiply(num1, num2);
}));

Divide.addEventListener('click', (() => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    console.log(num1);
    console.log(num2);
    console.log(functions.divide(num1, num2));
    output.value = functions.divide(num1, num2);
}));
