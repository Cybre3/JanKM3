class General {
    constructor(general, army, wins, losses) {
        this.general = general;
        this.army = +army;
        this.wins = +wins;
        this.losses = +losses;
    }

    format() {
        return `\/\\general: ${this.general}\n---army: ${this.army}\n---wins: ${this.wins}\n---losses: ${this.losses}`;
    }
}

let allKingdoms = {};

function main(kingsArrObj, listedBattleArr) {
    allKingdoms = {};
    populateKingdomsObj(kingsArrObj);
    battleArmiesWar(listedBattleArr);
    let winnerObj = mostWinsOf(allKingdoms);
    printWinner(winnerObj);
}

function populateKingdomsObj(arr) {
    for (let kingsObj of arr) {
        let [kingdom, general, armySize] = Object.values(kingsObj);

        if (!allKingdoms[kingdom]) {
            allKingdoms[kingdom] = new Map();
        }

        if (!allKingdoms[kingdom].has(general)) {
            allKingdoms[kingdom].set("kingWins", 0);
            allKingdoms[kingdom].set("kingLosses", 0);
            allKingdoms[kingdom].set(general, {
                army: armySize,
                genWins: 0,
                genLosses: 0,
            });
        } else {
            let generalArmy = allKingdoms[kingdom].get(general)["army"];
            generalArmy += armySize;
        }
    }
}

function battleArmiesWar(arr) {
    for (let battle of arr) {
        const [attackKing, attackGen, defKing, defGen] = battle;
        const aGeneral = allKingdoms[attackKing].get(attackGen);
        const dGeneral = allKingdoms[defKing].get(defGen);
        let akingdomWins = allKingdoms[attackKing].get("kingWins");
        let akingdomLoss = allKingdoms[attackKing].get("kingLosses");
        let dkingdomWins = allKingdoms[defKing].get("kingWins");
        let dkingdomLoss = allKingdoms[defKing].get("kingLosses");

        if (attackKing !== defKing && aGeneral.army > dGeneral.army) {
            aGeneral.genWins++;
            dGeneral.genLosses++;
            allKingdoms[attackKing].set("kingWins", akingdomWins + 1);
            allKingdoms[defKing].set("kingLosses", dkingdomLoss + 1);
            aGeneral.army = Math.floor(aGeneral.army * 1.1);
            dGeneral.army = Math.floor(dGeneral.army * 0.9);
            
        } else if (attackKing !== defKing && aGeneral.army < dGeneral.army) {
            dGeneral.genWins++;
            aGeneral.genLosses++;
            allKingdoms[defKing].set("kingWins", dkingdomWins + 1);
            allKingdoms[attackKing].set("kingLosses", akingdomLoss + 1);
            dGeneral.army = Math.floor(dGeneral.army * 1.1);
            aGeneral.army = Math.floor(aGeneral.army * 0.9);
        }
    }
}

function mostWinsOf(obj) {
    let allKingdomsArr = Object.entries(obj);

    allKingdomsArr.forEach((kingdom, index) => {
        kingdom.forEach((kingInfo, index) => {
            if (index % 2 !== 0) {
                kingInfo = Array.from(kingInfo);
                kingdom.splice(1, 1, kingInfo);
                kingInfo.forEach((generalInfo) => {
                    if (typeof generalInfo[1] === "object") {
                        generalInfo[1] = Object.entries(generalInfo[1]);
                    }
                });
            }
        });
        allKingdomsArr.splice(index, 1, kingdom);
    });

    allKingdomsArr.sort((a, b) => {
        let aKindomWins = a[1][0][1];
        let bkingdomWins = b[1][0][1];
        return bkingdomWins - aKindomWins;
    });

    let winnerObj = {};

    const winKingdomName = allKingdomsArr[0][0];
    const winKingdomInfoArr = allKingdomsArr[0][1];
    winnerObj.kingdom = winKingdomName;
    winnerObj.generals = [];

    winKingdomInfoArr.forEach((generalInfo, index) => {
        if (index > 1) {
            winnerObj.generals.push(generalInfo);
        }
    });

    winnerObj.generals.sort((a, b) => {
        let aGenWins = a[1][1][1];
        let bGenWins = b[1][1][1];
        let aGenLoss = a[1][2][1];
        let bGenLoss = b[1][2][1];
        let aGenName = a[0];
        let bGenName = b[0];
        return (
            (bGenWins - aGenWins && aGenLoss - bGenLoss) ||
            aGenName.localeCompare(bGenName)
        );
    });

    return winnerObj;
}

function printWinner(obj) {
    console.log(`Winner: ${obj.kingdom}`);
    obj.generals.forEach((general) => {
        const [genName, genArray] = general;
        const [army, wins, loss] = genArray;
        const eachGen = new General(genName, army[1], wins[1], loss[1]);
        console.log(eachGen.format());
    });
}

main(
    [
        { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 },
    ],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"],
    ]
);

main(
    [
        { kingdom: "Stonegate", general: "Ulric", army: 5000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 1000 },
    ],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"],
    ]
);

main(
    [
        { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    ],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Doran"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ]
);
