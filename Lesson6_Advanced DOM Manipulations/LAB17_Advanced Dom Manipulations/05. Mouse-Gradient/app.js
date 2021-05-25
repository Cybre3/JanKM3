function attachGradientEvents() {
    const theGradient = document.getElementById("gradient");
    const theResult = document.getElementById("result");
    // console.log(theGradient);
    // console.log(theResult);
    theGradient.addEventListener("click", function (e) {
        let thePercent = Math.floor(
            (e.offsetX / theGradient.clientWidth) * 100
        ); // use offset instead of client. It is more precise.

        theResult.textContent = thePercent + '%';
        // console.log(e.clientX, e.offsetX, theGradient.clientWidth, theGradient.offsetWidth);
    });
}
