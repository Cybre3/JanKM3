function subtract() {
    const num1 = document.getElementById('firstNumber');
    const num2 = document.getElementById('secondNumber');
    const resultDiv = document.getElementById('result');
    let result = num1.value - num2.value;
    resultDiv.textContent = result;
}