function main(matrix) {
    let magic = true;
    const colLength = matrix[0].length;
    let sumsArr = [];

    matrix.forEach((arr) => {
        const sum = arr.reduce((a, b) => a + b);
        sumsArr.push(sum);
    });

    for (let i = 0; i < colLength; i++) {
        let nums = [];
        for (let arr of matrix) {
            nums.push(arr[i]);
        }
        const colSum = nums.reduce((a, b) => a + b);
        sumsArr.push(colSum);
    }

    sumsArr.reduce((a, b) => {
        if (a > b || a < b) {
            magic = false;
        }
    });

    console.log(magic);
}

main([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);
main([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);
main([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]);
