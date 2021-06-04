function slickMarkup() {
    const sliderSection = document.querySelector(".slider");

    const imageArr = [
        "djangoprogrammi_thumbnail.png",
        "html-css-fundaments.jpg",
        "js-fundamentals.jpg",
        "programming-fundamentals.png",
        "pt-fund.png",
    ];

    for (let i = 0; i < imageArr.length; i++) {
        const newDiv = document.createElement("div");
        const newImg = document.createElement("img");
        newImg.src = `./images/${imageArr[i]}`;
        newDiv.appendChild(newImg);
        sliderSection.appendChild(newDiv);
    }
}

function slickPlugin() {
    $('.slider').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
}

export { slickMarkup, slickPlugin };
