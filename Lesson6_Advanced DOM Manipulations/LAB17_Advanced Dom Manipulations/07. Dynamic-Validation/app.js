function validate() {
    const theInput = document.getElementById("email");
    const validEmail = /[a-z\d]+@[a-z\d]+\.[a-z]{1,3}/;

    theInput.addEventListener("change", function (e) {
        if (validEmail.test(theInput.value)) {
            e.target.classList.remove("error");
            theInput.value = '';
        } else {
            e.target.classList.add("error");
        }
    });
}
