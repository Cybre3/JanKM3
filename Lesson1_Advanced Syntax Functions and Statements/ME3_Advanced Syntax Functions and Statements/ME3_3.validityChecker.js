function main(coordinatesArr) {
    let [x1, y1, x2, y2] = coordinatesArr;

    console.log(`{${x1}, ${x2}} to {0, 0} is ${midPoint(x1, x2, 0, 0)}`);
    console.log(`{${y1}, ${y2}} to {0, 0} is ${midPoint(0, 0, y1, y2)}`);
    console.log(
        `{${x1}, ${x2}} to {${y1}, ${y2}} is ${midPoint(x1, x2, y1, y2)}`
    );
}

let midPoint = (x1, y1, x2, y2) => {
    let coordinate = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (coordinate === parseInt(coordinate)) {
        return 'valid';
    } else {
        return 'invalid';
    }
};

main([3, 0, 0, 4]);
main([2, 1, 1, 1]);