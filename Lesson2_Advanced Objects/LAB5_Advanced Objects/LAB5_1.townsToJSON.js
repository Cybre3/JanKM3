function main(townsArr) {
    let removeCh = /\|/gm;
    let objsArr = [];
    let keys = townsArr.shift();

    while (keys.includes('|')) {
        keys = keys.replace(removeCh, '').trim();
    }

    for (let townInfoStr of townsArr) {
        let townObj = {};
        let eachTown = townInfoStr.replace(removeCh, '').trim().split('  ');
        let eachKey = keys.split('  ');
        
        townObj[eachKey.shift()] = eachTown.shift();
        townObj[eachKey.shift()] = Number(Number(eachTown.shift()).toFixed(2));
        townObj[eachKey.shift()] = Number(Number(eachTown.shift()).toFixed(2));;

        objsArr.push(townObj);
    }

    console.log(JSON.stringify(objsArr));
}

main([
    '| Town | Latitude | Longitude |',
    '| Melbourne | -37.840935 | 144.946457 |',
    '| Beijing | 39.913818 | 116.363625 |',
]);
