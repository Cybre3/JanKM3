function notify(message) {
    console.log(message);

    const notifyDiv = document.getElementById("notification");
    notifyDiv.textContent = message;
    notifyDiv.style.display = "block";
    let notifyTimer = setInterval(disappear, 2000);

    function disappear() {
        notifyDiv.style.display = "";
        clearInterval(notifyTimer);
    }
}
