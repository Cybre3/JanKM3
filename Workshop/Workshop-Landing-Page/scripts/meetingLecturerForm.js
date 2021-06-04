function meetLectFormSubmit() {
    const sendButton = document.querySelector("#bookHourBtn");

    sendButton.addEventListener("click", formValidation);
}

function formValidation() {
    const form = document.querySelector("form");
    const formFields = document.querySelectorAll("form p");
    const validUserName = /^[a-zA-Z]\w+$/;

    let fieldsArr = [];

    formFields.forEach((p) => {
        fieldsArr.push(p.children[1]);
    });

    const emptyField = fieldsArr.some((field) => field.value === "");

    if (emptyField || !validUserName.test(fieldsArr[0].value)) {
        return;
    }

    addConsult(fieldsArr);

    form.reset();
}

function addConsult(arr) {
    const [userName, subject, lecturerName, dateTime] = arr;
    const [date, time] = dateTime.value.split(" ");
    let [hours, mins] = time.split(":");
    hours = parseInt(hours % 12);
    let [day, month, year] = date.split(".");
    year = year.slice(2);

    const consultSection =
        document.querySelector(".education").lastElementChild;
    const consultBoxBodyUl = consultSection.children[1].firstElementChild;
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newIcon = document.createElement("i");

    newSpan.textContent = `${lecturerName.value} - ${month}/${day} - ${
        hours < 10 ? `0` + hours : hours
    }:${mins}`;
    newIcon.setAttribute("class", "fas fa-chevron-circle-right");
    newLi.appendChild(newSpan);
    newLi.appendChild(newIcon);
    consultBoxBodyUl.appendChild(newLi);

    increaseConsultCountBy_1(consultSection.lastElementChild);
    $.notify("Access granted", "success");
}

function increaseConsultCountBy_1(domEl) {
    const totalConsultSpan = domEl.lastElementChild;
    totalConsultSpan.textContent = Number(totalConsultSpan.textContent) + 1;
}

function dateTimePlugin() {
    jQuery("#dateTimeInput").datetimepicker({
        format: "d.m.Y H:i",
        lang: "ru",
    });
}

export { meetLectFormSubmit, dateTimePlugin };
