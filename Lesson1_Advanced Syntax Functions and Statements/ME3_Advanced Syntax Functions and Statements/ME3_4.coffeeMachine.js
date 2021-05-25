function main(ordersArr) {
    let incomeReport = 0;

    for (let orders of ordersArr) {
        const eachOrder = orders.split(', ');
        const moneyInserted = eachOrder.shift();
        const drinkType = eachOrder[0];
        let price = 0;

        for (let addItem of eachOrder) {
            price = drinkCost(price, addItem);
        }

        if (moneyInserted >= price) {
            incomeReport += price;
            console.log(
                `You ordered ${drinkType}. Price: $${price.toFixed(
                    2
                )} Change: $${(moneyInserted - price).toFixed(2)}`
            );
        } else {
            console.log(
                `Not enough money for ${drinkType}. Need $${(
                    price - moneyInserted
                ).toFixed(2)} more`
            );
        }
    }

    console.log(`Income Report: $${incomeReport.toFixed(2)}`);
}

function drinkCost(price, item) {
    const drinkPrices = {
        caffeine: 0.8,
        decaf: 0.9,
        tea: 0.8,
        milk: 0.1,
        sugar: 0.1,
    };

    switch (item) {
        case 'tea':
        case 'caffeine':
        case 'decaf':
            return (price += drinkPrices[item]);
        case 'milk':
            return (price += Number((price * +drinkPrices[item]).toFixed(1)));
    }

    if (+item > 0) {
        price += drinkPrices.sugar;
    }

    return price;
}

main([
    '1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0',
]);
