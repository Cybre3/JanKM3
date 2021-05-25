function main(productsArr) {
    let productsMap = new Map();
    productsArr.sort((a, b) => a.localeCompare(b));


    for (let prodInfo of productsArr) {
        let [productName, Qty] = prodInfo.split(' : ');
        let firstLetter = productName[0];

        if (!productsMap.has(firstLetter)) {
            productsMap.set(firstLetter, []);
        }

        productsMap.get(firstLetter).push(prodInfo);
    }

    let sortedAlphaProdArr = Array.from(productsMap);

    for (let [letter, prodArr] of sortedAlphaProdArr) {
        console.log(letter);

        prodArr.forEach(itemInfo => {
            let [item, qty] = itemInfo.split(' : ');
            console.log(`  ${item}: ${qty}`);
        });
    }
}

main([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);
