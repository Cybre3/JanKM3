function main(numsArr) {
    let nonDecreasingArr = [numsArr[0]];

    numsArr.reduce((num1, num2) => {
        // console.log(num1, num2);
        if (num2 > num1) {
            nonDecreasingArr.push(num2);
            return num2;
        } else {
            return num1;
        }
    });

    console.log(nonDecreasingArr.join('\n'))
    // console.log('Above is reduce method in action. \nBelow is the arr' + '\n' + nonDecreasingArr.join('\n'));
    // console.log('-------------');
}

main([1, 3, 8, 4, 10, 12, 3, 2, 24]);
main([1, 2, 3, 4]);
main([20, 3, 2, 15, 6, 1]);
