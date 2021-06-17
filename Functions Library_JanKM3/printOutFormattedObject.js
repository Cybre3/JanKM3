function prntSurvivers() {
    let gladConvertArr = Object.entries(gladPoolObj);
    // console.log(gladConvertArr);

    gladConvertArr.sort(
        (glad1, glad2) =>
            skillSum(glad2) - skillSum(glad1) ||
            glad1[0].localeCompare(glad2[0])
    );

    for (let eachGlad of gladConvertArr) {
        console.log(`${eachGlad[0]}: ${skillSum(eachGlad)} skill`);

        let techniqueArr = Object.entries(eachGlad[1]);

        techniqueArr.sort(
            (glad1, glad2) =>
                glad2[1] - glad1[1] || glad1[0].localeCompare(glad2[0])
        );

        for (let [technique, skill] of techniqueArr) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}