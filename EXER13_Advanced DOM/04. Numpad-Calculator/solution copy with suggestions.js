function solve() {
    const buttons = document.querySelectorAll("button");
    const expressField = document.getElementById("expressionOutput");
    const resultField = document.getElementById("resultOutput");
    const validOpRegex = /^\d+\.?\d*[\+\-\/\*]\d+/gm;
    const validNumRegex = /^\d+\.?\d*/gm;
    let result = "";

    for (let button of buttons) {
        let buttonValue = button.value;
        // console.log(buttonValue);
        button.addEventListener("click", function () {
            switch (buttonValue) {
                case "Clear":
                    expressField.textContent = "";
                    resultField.textContent = "";
                    break;
                case "=":
                    const validSyntax = validOpRegex.test(
                        expressField.textContent
                    );
                    const validNum = validNumRegex.test(
                        expressField.textContent
                    );
                    // if (validNum === true) {
                    //     resultField.textContent = expressField.textContent;
                    // } else 
                    // if (validSyntax === true) {
                        result = eval(expressField.textContent);
                        resultField.textContent = result;
                        console.log(expressField.textContent);
                        console.log(validSyntax);
                    // } else {
                    //     resultField.textContent = "NaN";
                    // }
                    break;
                default:
                    expressField.textContent += buttonValue;
                    console.log(expressField.textContent);
                    break;
            }
        });
    }
    // console.log(buttons);
}

function expression() {
    switch(operator){
        case '+'
        case '-'
        case '/'
        case '*'
    }
}
// / Handles the deletion of user input
// // If currentInput is not empty, delete rightmost character
// // Else if currentInput is empty and inputArray is not empty, pop off of inputArray and then delete
// function deleteInput() {
//   let removedVal;
//   function deleteVal() {
//     removedVal = currentInput[currentInput.length - 1];
//     currentInput = currentInput.substr(0, currentInput.length - 1);
//   }
//   if (currentInput != "") {
//     deleteVal();
//   } else if (currentInput == "" && inputArray.length > 0) {
//     currentInput = inputArray.pop();
//     deleteVal();
//   }
//   if (operators.hasOwnProperty(removedVal)) {
//     allowOperator = true;
//   }
// }

// // Preps the input array for calculation
// function finalizeInputArray() {
//   // Makes sure all values are stored in array
//   if (currentInput != "") {
//     inputArray.push(currentInput);
//     currentInput = "";
//   }
//   // Removes an operator from the end of inputArray if the user left one there
//   if (operators.hasOwnProperty(inputArray[inputArray.length - 1])) {
//     inputArray.pop();
//     allow

("use strict");

// Variables
// let allowOperator = false;
// let nextInputClears = false;
// let currentInput = "";
// let inputArray = [];
// let buttons = document.getElementsByTagName("button");
// let numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
// let bgColorMem;
// let operators = {
//   "+" : function(a, b) { return a + b },
//   "-" : function(a, b) { return a - b},
//   "x" : function(a, b) { return a * b},
//   "\u00f7" /*Division*/ : function(a, b) {
//     if (b != 0) {
//       return a / b
//     }
//     allowOperator = false;
//     nextNumClears = true;
//     return "undefined";
//   }
// }

// // Helper function to set HTML of specified element
// function setHTML(element, html) {
//   document.getElementById(element).innerHTML = html;
// }

// // Updates the display
// function updateDisplay() {
//   setHTML("display", inputArray.join(" ") + " " + currentInput);
// }

// // Handles the appending of integers
// function appendNum(num) {
//   let numTooLong = false;
//   if (currentInput.length >= 18) {
//     numTooLong = true;
//   }
//   if (currentInput == "" && inputAr
