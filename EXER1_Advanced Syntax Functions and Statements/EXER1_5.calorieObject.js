function main(strArr) {
    let calorieObj = {};

    for (let i = 0; i < strArr.length; i += 2) {
        calorieObj[strArr[i]] = strArr[i + 1];
    }

    console.log(calorieObj);
}

main(['Yoghurt', 48, 'Rice', 138, 'Apple', 52]);
main(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);
