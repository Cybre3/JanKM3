function main(cityArr) {
    let cityPopulationRegex = /(?<city>[A-Z][a-z]{2,}\ ?\w+)\ ?<->\ ?(?<population>\d+)/;
    let cityPopObj = {};

    for (let cityInfo of cityArr) {
        let matchRegex = cityPopulationRegex.exec(cityInfo);
        !cityPopObj[matchRegex.groups.city] ? cityPopObj[matchRegex.groups.city] = +matchRegex.groups.population : cityPopObj[matchRegex.groups.city] += +matchRegex.groups.population;
    }

    let cityPopInfoArr = Object.entries(cityPopObj);

    for(let cityPopInfo of cityPopInfoArr) {
        console.log(`${cityPopInfo[0]}: ${cityPopInfo[1]}`);
    }
}

main([
    'Sydney <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
]);
// main([
//     'Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000',
// ]);
