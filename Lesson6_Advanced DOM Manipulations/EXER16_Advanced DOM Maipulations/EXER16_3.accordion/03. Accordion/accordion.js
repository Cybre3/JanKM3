function toggle() {
    const button = document.getElementsByClassName("button")[0];
    const extraPara = document.getElementById("extra");

    switch (extraPara.style.display) {
        case "":
            extraPara.style.display = "block";
            button.textContent = "LESS";
            break;
        case "block":
            extraPara.style.display = "";
            button.textContent = "MORE";
            break;
        default:
            console.log("Error!");
    }
}
