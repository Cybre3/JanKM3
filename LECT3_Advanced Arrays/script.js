// function main() {
//     let arr = [0, 1, 2, 3, 4];
//     console.log(arr[-1]);
// }

// main();

// let a = [1, 2, 3];console.log(a); // [ 1, 2, 3 ]
// a[3] = 4;
// console.log(a); // [ 1, 2, 3, 4 ]

// let arr = [];
// arr[3.4] = 'Oranges';
// arr[-1] = 'Apples';
// console.log('The entire array ' + arr.length);                // 0
// console.log(arr.hasOwnProperty(3.4));   // true
// arr["1"] = 'Grapes';
// console.log(arr.length);                // 2
// console.log(arr); // [ <1 empty item>, 'Grapes', '3.4': 'Oranges', '-1': 'Apples' ]
// console.log(arr[0]);

// function main(numsArr) {
//     let reversedOddNums = numsArr
//         .filter((num, index) => index % 2 !== 0)
//         .map((num) => num * 2)
//         .reverse()
//         .join(' ');

//     console.log(reversedOddNums);

//     // let oddNumsArr = numsArr.filter((num, index) => index % 2 !== 0);
//     // let doubledArr = oddNumsArr.map((num) => num * 2);
//     // let reversedArr = doubledArr.reverse();
//     // let output = reversedArr.join(' ');

//     // console.log(output);
// }

// main([10, 15, 20, 25]);
// main([3, 0, 10, 4, 7, 3]);

function main(arrList) {
    let maxNum = arrList
        .join(',')
        .split(',')
        .sort((a, b) => a - b)
        .pop();

    console.log(maxNum);
}

main([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
]);
main([
    [20, 50, 10],
    [8, 33, 145],
]);

// let obj = {
//     concat: function (arrOfArrs) {
//         arrOfArrs.forEach((arr, index) => {
//             if(index + 1 !== -1) {
//                 arr.concat(arrOfArrs[index + 1]);
//             }
//         });
//         console.log(arrOfArrs);
//     }
// };

// function main(someArrayOfArrays) {
//     let counter = 0;
//     let matches = [];
//     let objMatches = {};

//     for (let i = 0; i < someArrayOfArrays.length; i++) {
//       for (let j = 0; j < someArrayOfArrays[i].length; j++) {
//         if (someArrayOfArrays[i + 1] && someArrayOfArrays[i][j] === someArrayOfArrays[i+1][j]) {
//           matches.push(someArrayOfArrays[i][j]);
//           if (!objMatches[someArrayOfArrays[i][j]]) {
//             objMatches[someArrayOfArrays[i][j]] = 1;
//           } else {
//             objMatches[someArrayOfArrays[i][j]] += 1;
//           }
//           counter++;
//         }
//       }
//     }
//     console.log(counter,matches, objMatches);
//   }
