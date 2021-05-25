function focus() {
    const allInputs = document.querySelectorAll("input");
    console.log(allInputs);

    allInputs.forEach((input) => {
        input.addEventListener("focus", focused);
        input.addEventListener("blur", blurred);
    });
}

function focused(e) {
    e.target.parentElement.classList.add("focused");
}

function blurred(e) {
    e.target.parentElement.classList.remove("focused");
}
