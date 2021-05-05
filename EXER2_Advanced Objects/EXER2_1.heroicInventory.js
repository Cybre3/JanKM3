// class Hero {
//     constructor(name, level, items) {
//         this.name = name;
//         this.level = level;
//         this.items = items;
//     }

//     heroStats() {
//         return `name: ${this.name}, level: ${this.level}, items:${this.items}`;
//     }
// }

// function main(heroArr) {
//     let heroInfo = [];

//     for (let str of heroArr) {
//         let [heroName, heroLvl, items] = str.split(' / ');
//         heroLvl = Number(heroLvl);
//         heroInfo.push(new Hero(heroName, heroLvl, items.split(', ')));
//     }

//     console.log(JSON.stringify(heroInfo));
// }

function main(heroArr) {
    let heroStatsArr = [];

    for (let heroStr of heroArr) {
        let heroStatsObj = {};
        let [heroName, heroLvl, heroItems] = heroStr.split(' / ');
        heroLvl = Number(heroLvl);

        heroStatsObj.name = heroName;
        heroStatsObj.level = heroLvl;
        heroStatsObj.items = heroItems.split(', ');

        heroStatsArr.push(heroStatsObj);
    }

    console.log(JSON.stringify(heroStatsArr));
}

main([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);
