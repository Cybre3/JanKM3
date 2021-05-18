function solve() {
    const regex = /\\n\W+|\r|\n|\v/gm;
    const emptySpaces = /\ {2,}/gm;

    let inputP = document.getElementById("input");
    let sentenceArr = inputP.textContent
        .split(".")
        .map((str) => str.replace(regex, " "))
        .map((str) => str.replace(emptySpaces, " "));
    let outputDiv = document.getElementById("output");

    for (let i = 0; i < sentenceArr.length; i += 3) {
        let outputPara = document.createElement("p");
        let tempSentence;

        if (!sentenceArr[i]) {
            continue;
        } else if (!sentenceArr[i + 1]) {
            tempSentence = sentenceArr[i] + ".";
        } else if (!sentenceArr[i + 2]) {
            tempSentence = sentenceArr[i] + "." + sentenceArr[i + 1] + ".";
        } else {
            tempSentence =
                sentenceArr[i] +
                "." +
                sentenceArr[i + 1] +
                "." +
                sentenceArr[i + 2] +
                ".";
        }

        console.log(tempSentence);
        outputPara.textContent = tempSentence;
        outputDiv.appendChild(outputPara);
    }
}

// function solve() {
//   // Select Dom elements
//   const content = document.getElementById('input');
//   const output = document.getElementById('output');

//   // Array of sentences
//   const sArr = content.innerText.split('.');
//   sArr.pop();
//   // Get to know how many paragraphs needed
//   const pNum = Math.ceil(sArr.length / 3);

//   // loop to generate paragraph
//   for (let i = 0; i < pNum; i++) {
//       let pArr;
//       // Create paragraphs
//       let p = document.createElement('p');
//       pArr = sArr.splice(0, 3);
//       // Config the innerText property
//       p.innerText = pArr.join('. ') + '.';
//       // Append the paragraph to the DOM
//       output.appendChild(p);
//   }
// }

// let splitStringArray = input.
