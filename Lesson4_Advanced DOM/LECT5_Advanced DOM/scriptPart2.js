console.log("The JavaScript is working!");
console.log('The document is', document);

// Create h1 tag
// Put some text in h1 tag
// Add to document

let h1Tag = document.createElement('h1');
h1Tag.textContent = "We love DOM!";

let mainDIV = document.createElement('div');
document.body.prepend(mainDIV);

// Grab elements on the page

let divWeJustMade = document.getElementsByTagName('div')[0];
console.log('Div we just made', divWeJustMade);
divWeJustMade.appendChild(h1Tag);

let pageTitle = document.getElementById('page_title');
console.log('the page title is', pageTitle);
pageTitle.textContent = "What ever you want it to equal";

alert('Warning I have you computer');
console.log(navigator.geolocation, navigator.language);
console.log(screen.width + ' x ' + screen.height);

// Event Listeners
h1Tag.addEventListener("mouseover", makeRed);

function click() {
    console.log('Hello clicked!');
}

function makeRed() {
    this.style.color = "red";
}