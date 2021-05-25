function solve() {
    const buttons = document.querySelectorAll("button");
    const expressField = document.getElementById("expressionOutput");
    const resultField = document.getElementById("resultOutput");
    let clicked = false;

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
                    result = eval(expressField.textContent);
                    resultField.textContent = result;
                    // console.log(expressField.textContent);
                    break;
                default:
                    switch (buttonValue) {
                        case "+":
                        case "-":
                        case "*":
                        case "/":
                            clicked = true;
                            expressField.textContent += buttonValue;
                            button.addEventListener("click", function () {
                                const currentButton = expressField.textContent[0];
                                console.log(currentButton);
                                // if (currentButton === buttonValue) {
                                //     expressField.replace(
                                //         buttonValue,
                                //         currentButton
                                //     );
                                // }
                                clicked = false;
                            });
                            break;
                        default:
                            expressField.textContent += buttonValue;
                            break;
                    }
            }
        });
    }
    // console.log(buttons);
}
