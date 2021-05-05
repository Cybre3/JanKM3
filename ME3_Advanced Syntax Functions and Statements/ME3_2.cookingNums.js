function main(operationsArr) {
    let startNum = Number(operationsArr.shift());
    for(let operation of operationsArr) {
        console.log(startNum = process(operation, startNum));
    }
    // console.log(operationsArr);
}

function process(op, num) {
    switch (op) {
        case 'chop':
            // divide the number by two
            return num /= 2;
        case 'dice':
            // square root of number
            return Math.sqrt(num);
        case 'spice':
            // add 1 to number
            return num += 1;
        case 'bake':
            // multiply number by 3
            return num *= 3;
        case 'fillet':
            // subtract 20% from number
            return Number((num *= 0.8).toFixed(1));
    }
}
main(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
main(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);