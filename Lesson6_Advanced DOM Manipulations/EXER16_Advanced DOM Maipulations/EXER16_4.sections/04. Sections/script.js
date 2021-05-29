function create(words) {
    const contentDiv = document.getElementById("content");

    for (let word of words) {
        const newDiv = document.createElement("div");
        const newPara = document.createElement("p");
        newPara.textContent = word;
        newDiv.appendChild(newPara);
        contentDiv.appendChild(newDiv);
        newPara.style.display = "none";
    }

    contentDiv.addEventListener("click", revealPara);
}

function revealPara(e) {
    //  console.log("Working", e.target);
    e.target.firstChild.style.display = "block";
}
