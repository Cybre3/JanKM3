let emptyObj = {};

function solve() {
    const links = document.getElementsByClassName("link-1");
    // console.log(links)

    // DO NOT USE FOR IN LOOP!!!!!!
    // for (let link in links) {
    //     let linkCount = 0;

    //     if (links[link].children) {
    //         console.log(links[link]);

    //         links[link].addEventListener("click", linkClicked);
    //         linkCount = links[link].children[1].textContent.match(/\d+/)[0];

    //         if (!emptyObj[links[link].children[0].textContent]) {
    //             emptyObj[links[link].children[0].textContent] = +linkCount;
    //         }
    //     }
    // }
    // DO NOT USE FOR IN LOOP!!!!!!

    // console.log(emptyObj);
    
    for (let link of links) {
      let linkCount = 0;
      
      // console.log(links[link]);
      
      link.addEventListener("click", linkClicked);
      linkCount = +link.children[1].textContent.match(/\d+/)[0];
      
      if (!emptyObj[link.children[0].textContent]) {
        emptyObj[link.children[0].textContent] = linkCount;
      }
    }
    
    // console.log(links);

    // console.log(emptyObj);
}

function linkClicked() {
    // console.log("it ran");
    emptyObj[this.children[0].textContent]++;

    this.children[1].textContent = this.children[1].textContent.replace(
        /\d+/,
        emptyObj[this.children[0].textContent]
    );

    // this.children[1].textContent = `visited ${
    //     emptyObj[this.children[0].textContent]
    // } times`;
}
