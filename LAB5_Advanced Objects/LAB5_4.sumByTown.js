function main(townsArr) {
    let townsObj = {};

    townsArr.forEach((town, index) => {
        if (index % 2 === 0 && !townsObj[town]) {
            townsObj[town] = Number(townsArr[index + 1]);
        } else if (townsObj[town]) {
            townsObj[town] += Number(townsArr[index + 1]);
        }
    });

    console.log(JSON.stringify(townsObj));
}

main(['Sydney', '20', 'Melbourne', '3', 'Sydney', '5', 'Melbourne', '4']);
main(['Sydney', '20', 'Melbourne', '3', 'sydney', '5', 'melbourne', '4']);
