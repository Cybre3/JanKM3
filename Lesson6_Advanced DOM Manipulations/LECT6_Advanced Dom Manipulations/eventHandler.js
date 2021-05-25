const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", clickMe);

function clickMe(event) {
    console.log("This event was ", event);
    const target = event.currentTarget;
    console.log("Target is ", target);
    const targetText = target.textContent;
    console.log(targetText);
    target.textContent = +targetText + 1;
}

const myDiv = document.getElementsByTagName("div")[0];
console.log("myDiv is ", myDiv);

myDiv.addEventListener("mouseover", function (e) {
    console.log("mouseover event ", e);

    const style = e.currentTarget.style;
    const { backgroundColor } = style;

    console.log("BG color ", backgroundColor);

    if (backgroundColor === "red") {
        myDiv.style.backgroundColor = "black";
        myDiv.style.color = "white";
    } else {
        myDiv.style.backgroundColor = "red";
        myDiv.style.color = "#234465";
    }
});

document.getElementById("parent-list").addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        console.log(
            "List item",
            e.target.id.replace("post-", ""),
            "was clicked!"
        );
    }
});
