function main(strArr) {
    let wordCountObj = {};
    let removeNotWordCh = /[^\w]/gm;
    let wordsArr = strArr[0]
        .split(removeNotWordCh)
        .filter((word) => word !== '');

    for (let word of wordsArr) {
        !wordCountObj[word] ? (wordCountObj[word] = 1) : wordCountObj[word]++;
    }

    console.log(JSON.stringify(wordCountObj));
}

main(["Far too slow, you're far too slow."]);
main(['JS devs use Node.js for server-side JS.--JS for devs']);