import functions from './functions.js';


idAdd.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("output").value = functions.add(num1, num2);
});

idSubtract.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("output").value = functions.subtract(num1, num2);
});

idMultiply.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    output.value = functions.multiply(num1, num2);
});

idDivide.addEventListener('click', () => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    output.value = functions.divide(num1, num2);
});

//Add event listeners for taxcalc.html

taxMe.addEventListener('click', () => {
    // let total_income = parseInt(document.getElementById(total_income).value);
    // console.log(total_income);
    // document.getElementById("total_tax").value = functions.taxCalc(total_income);
    // console.log(getElementById("total_tax").value);
    total_tax.textContent = functions.taxCalc(total_income.value);
});

