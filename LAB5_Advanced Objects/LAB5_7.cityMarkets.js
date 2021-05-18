function main(cityInfoProdArr) {
    let ProdTotalIncomeObj = {};

    for (let cityInfo of cityInfoProdArr) {
        let [town, product, qty_Price] = cityInfo.split(" -> ");
        let [qty, price] = qty_Price.split(" : ");

        if (!ProdTotalIncomeObj[town]) {
            ProdTotalIncomeObj[town] = {};
        }

        if (!ProdTotalIncomeObj[town][product]) {
            ProdTotalIncomeObj[town][product] = +qty * +price;
        }
    }

    for (let town in ProdTotalIncomeObj) {
        console.log(`Town - ${town}`);
        // for(let key in ProdTotalIncomeObj[town]) {
        //     console.log(`$$$${key} : ${ProdTotalIncomeObj[town][key]}`);
        // }

        for (const [key, value] of Object.entries(ProdTotalIncomeObj[town])) {
            console.log(`$$$${key}:${value}`);
        }
    }

    console.log(ProdTotalIncomeObj);
}

main([
    "Sydney -> Laptops HP -> 200 : 2000",
    "Sydney -> Raspberry -> 200000 : 1500",
    "Sydney -> Audi Q7 -> 200 : 100000",
    "Montana -> Portokals -> 200000 : 1",
    "Montana -> Qgodas -> 20000 : 0.2",
    "Montana -> Chereshas -> 1000 : 0.3",
]);
