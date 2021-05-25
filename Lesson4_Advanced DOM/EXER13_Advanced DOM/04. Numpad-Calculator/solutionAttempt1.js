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
                    if (validSyntax === true) {
                        result = eval(expressField.textContent);
                        resultField.textContent = result;
                        console.log(expressField.textContent);
                        console.log(validSyntax);
                    } else {
                        resultField.textContent = "NaN";
                    }
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
