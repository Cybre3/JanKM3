function main(juiceInvntryArr) {
    let juiceBtlsCountObj = {};
    let remainderJuiceQtyObj = {};

    for (let eachJuice of juiceInvntryArr) {
        let [juiceName, Qty] = eachJuice.split(' => ');
        Qty = Number(Qty);
        
        !remainderJuiceQtyObj[juiceName]
            ? (remainderJuiceQtyObj[juiceName] = Qty)
            : (remainderJuiceQtyObj[juiceName] += Qty);

        if (remainderJuiceQtyObj[juiceName] > 1000) {
            let bottles = Math.floor(remainderJuiceQtyObj[juiceName] / 1000);
            juiceBtlsCountObj[juiceName] = bottles;
        }
    }

    for (let key in juiceBtlsCountObj) {
        console.log(`${key} => ${juiceBtlsCountObj[key]}`);
    }

    // console.log('------------');
}

main([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549',
]);
main([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',
]);
