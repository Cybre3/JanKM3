function main(strsArr) {
    let newObj = new Map();

    strsArr.forEach((str) => {
        newObj.set(JSON.stringify(JSON.parse(str).sort((a, b) => b - a)));
    });

    let newStrArr = Array.from(newObj).map((arr) => JSON.parse(arr[0]));

    newStrArr
        .sort((a, b) => a.length - b.length)
        .forEach((arr) => console.log(`[${arr.join(', ')}]`));
}

main([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[7.14, 7.180, 7.339, 80.099]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]',
]);
// main([
//     '[7.14, 7.180, 7.339, 80.099]',
//     '[7.339, 80.0990, 7.140000, 7.18]',
//     '[7.339, 7.180, 7.14, 80.099]',
// ]);
