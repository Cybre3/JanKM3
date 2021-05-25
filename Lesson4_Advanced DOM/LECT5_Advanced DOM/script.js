// let h1Element = document.getElementsByTagName('h1')[0];

// console.log(h1Element);
// h1Element.innerHTML = "DOM Is So Cool";

// let secondLi = document.getElementsByTagName('li')[1];
// console.log('Second Li', secondLi);

// let qSelector = document.querySelector('h1');
// console.log('Query Selector', qSelector);

// secondLi.innerHTML +=  " - DONE";
// console.log("Second LI x2", secondLi);

// let p = document.createElement('p');
// let li = document.createElement('li');

// let li2 = document.getElementById('my-list');
// let newLi = li2.cloneNode(true);

// let parent = document.getElementById('div1');
// let firstChild = document.getElementById('p1');
// let secondChild = document.getElementById('p2');

// console.log(parent);

// firstChild.remove();
// parent.removeChild(secondChild);

// let list = document.createElement('ul');
// let firstLi = document.createElement('li');
// firstLi.textContent = 'Peter';
// list.appendChild(firstLi);
// let secondLi = document.createElement('li');
// secondLi.innerHTML = '<b>Maria</b>';
// list.appendChild(secondLi);
// document.body.appendChild(list);
// parent.appendChild(list)

// let text = document.createElement('p');
// let node = document.createTextNode('Node, This is a new paragraph');
// text.appendChild(node);

// document.body.appendChild(text)

// const inputEle = document.getElementsByTagName('input')[0]; // Selecting the HTML DOM element.
// let whatType = inputEle.getAttribute('type'); // text
// let whatType2 = inputEle.getAttribute('name'); // username
// console.log(whatType, whatType2);

// const inputPassEle = document.getElementsByTagName('input')[1];
// console.log(inputPassEle);
// inputPassEle.setAttribute('name', 'password');

// const inputPassEle = document.getElementsByTagName('input')[1];
// inputPassEle.removeAttribute('placeholder');

// const someElement = document.getElementById('myDiv').classList;
// console.log(someElement);

// document.getElementById('myDiv').classList.add('testClass');
// console.log(someElement);

// document.getElementById('myDiv').classList.remove('container');
// console.log(someElement);

// let firstP = document.getElementsByTagName('p')[0];
// console.log('The first p is', firstP);
// console.log(firstP.parentElement);
// console.log(firstP.parentNode.childNodes);
// let pElements = document.getElementsByTagName('div')[0].children;
// console.log(pElements)

// let ul = document.getElementById('myList');
// let next = ul.children[0].nextElementSibling;
// console.log(next.textContent); // C#
// let prev = next.previousElementSibling;
// console.log(prev.textContent); // JS

let p = document.createElement('p');
let li = document.createElement('li');
li.appendChild(p);
console.log(li);

let ul = document.getElementById('my-list');
let li2 = document.createElement('li');
ul.prepend(li2);
