function main(carsArr) {
    let carsObj = {};
    
    for (let carInfo of carsArr) {
        let [carBrand, carModels, numProduced] = carInfo.split(' | ');
        numProduced = +numProduced;

        if (!carsObj.hasOwnProperty(carBrand)) {
            carsObj[carBrand] = {};
        }

        if (!carsObj[carBrand][carModels]) {
            carsObj[carBrand][carModels] = numProduced;
        } else {
            carsObj[carBrand][carModels] += numProduced;
        }
    }

    let arrOfconvertedCarsObj = Object.entries(carsObj);

    arrOfconvertedCarsObj.forEach((brand) => {
        console.log(brand.shift());

        let arrOfConvertedModelObj = Object.entries(brand.shift());

        arrOfConvertedModelObj.forEach((model) =>
            console.log(`###${model.shift()} -> ${model.shift()}`)
        );
    });
}

main([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
]);
