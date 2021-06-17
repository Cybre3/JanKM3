// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!

// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {
    domEls().pageBody.addEventListener("click", iveBeenClicked);
}

function iveBeenClicked(clickEvent) {
    switch (clickEvent.target.textContent) {
        case "SEND":
            addQToPendQBox();
            break;
        case "Send":
            addResponse(clickEvent);
            break;
        case "Archive":
        case "Open":
            pendBtnActions(clickEvent);
            break;
        case "Reply":
        case "Back":
            replyAction(clickEvent);
            break;
        default:
            return;
    }
}

function addQToPendQBox() {
    if (domEls().inputTextArea.value === "") {
        return;
    }

    const pendMainDiv = createDomEl().newDiv;
    const pendBtnDiv = createDomEl().newDiv;
    const pendImg = createDomEl().newImg;
    const pendSpan = createDomEl().newSpan;
    const pendP = createDomEl().newP;
    const pendArcBtn = createDomEl().newBtn;
    const pendOpnBtn = createDomEl().newBtn;

    let pendElsToAppend = [];

    pendImg.src = "./images/user.png";
    pendImg.width = "32";
    pendImg.height = "32";
    pendElsToAppend.push(pendImg);

    pendSpan.textContent =
        domEls().userNameInput.value === ""
            ? "Anonymous"
            : domEls().userNameInput.value;
    pendElsToAppend.push(pendSpan);

    pendP.textContent = domEls().inputTextArea.value;
    pendElsToAppend.push(pendP);

    pendArcBtn.setAttribute("class", "archive");
    pendArcBtn.textContent = "Archive";
    pendOpnBtn.setAttribute("class", "open");
    pendOpnBtn.textContent = "Open";

    pendBtnDiv.setAttribute("class", "actions");
    pendBtnDiv.appendChild(pendArcBtn);
    pendBtnDiv.appendChild(pendOpnBtn);
    pendElsToAppend.push(pendBtnDiv);

    pendMainDiv.setAttribute("class", "pendingQuestion");

    for (let element of pendElsToAppend) {
        pendMainDiv.appendChild(element);
    }

    domEls().pendingQs.appendChild(pendMainDiv);
}

function pendBtnActions(event) {
    const btnTarget = event.target;
    const questionDiv = event.target.parentElement.parentElement;
    const currentQ = questionDiv;

    questionDiv.remove();

    if (btnTarget.textContent === "Open") {
        addCurrentQToOpnQBox(currentQ);
    }
}

function addCurrentQToOpnQBox(div) {
    const btnDiv = div.lastElementChild;
    const replyBtn = btnDiv.firstElementChild;

    btnDiv.lastElementChild.remove();
    div.setAttribute("class", "openQuestion");

    replyBtn.setAttribute("class", "reply");
    replyBtn.textContent = "Reply";

    domEls().openQs.appendChild(div);

    const replySection = createDomEl().newDiv;
    const replyInput = createDomEl().newInput;
    const sendReplyBtn = createDomEl().newBtn;
    const replyOl = createDomEl().newOl;

    let rplyElsToAppend = [];

    replyInput.setAttribute("class", "replyInput");
    replyInput.setAttribute("type", "text");
    replyInput.setAttribute("placeholder", "​Reply to this question here...​");
    rplyElsToAppend.push(replyInput);

    sendReplyBtn.setAttribute("class", "replyButton");
    sendReplyBtn.textContent = "Send";
    rplyElsToAppend.push(sendReplyBtn);

    replyOl.setAttribute("class", "reply");
    replyOl.setAttribute("type", "1");
    rplyElsToAppend.push(replyOl);

    replySection.setAttribute("class", "replySection");
    replySection.style.display = "none";

    for (let element of rplyElsToAppend) {
        replySection.appendChild(element);
    }
    div.appendChild(replySection);
}

function replyAction(event) {
    const btn = event.target;
    const rplySection = btn.parentElement.nextElementSibling;
    

    if (btn.className === 'reply' && btn.textContent === "Reply") {
        btn.textContent = "Back";
        rplySection.style.display = 'block';
    } else if (btn.className === 'reply' && btn.textContent === "Back") {
        btn.textContent = "Reply";
        rplySection.style.display = 'none';
    }
}

function addResponse(event) {
    const reply = event.target.previousElementSibling;
    const ol = reply.parentElement.lastElementChild;
    const li = createDomEl().newLi;

    
    if(reply.value === '') {
        return;
    }
    
    li.textContent = reply.value;
    ol.appendChild(li);
}

function domEls() {
    const pageBody = document.querySelector("body");
    const inputSection = document.getElementById("inputSection");
    const inputTextArea = document.querySelector("#inputSection textarea");
    const userNameInput = document.querySelector("#inputSection input");
    const pendingQs = document.querySelector("#pendingQuestions");
    const openQs = document.querySelector("#openQuestions");

    return {
        pageBody,
        inputSection,
        inputTextArea,
        userNameInput,
        pendingQs,
        openQs,
    };
}

function createDomEl() {
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    const newSpan = document.createElement("span");
    const newP = document.createElement("p");
    const newBtn = document.createElement("button");
    const newInput = document.createElement("input");
    const newOl = document.createElement("ol");
    const newLi = document.createElement('li');
    return {
        newDiv,
        newImg,
        newSpan,
        newP,
        newBtn,
        newInput,
        newOl,
        newLi
    };
}
