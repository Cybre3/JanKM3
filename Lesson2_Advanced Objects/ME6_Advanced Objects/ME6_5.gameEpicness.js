/* 
first argument
{ kingdom: String, general: String, army: Number }
Every ​general ​has their ​army ​that fights for a certain ​kingdom​.
every ​kingdom’s name​ is ​unique​,
every ​general’s name​ is also ​unique ​in their ​kingdom​.

if(general ​already ​exists in their kingdom​){
    add the army to their current one. 
} 
*/

/* 
second ​argument 
    matrix of strings ​showing which ​kingdom’s generals​ will be ​fighting​ in this format:
[ [ "{AttackingKingdom} ", "{AttackingGeneral}", "{DefendingKingdom} ", "{DefendingGeneral}" ],...]

 ​first two elements
    attacking kingdom and it's general​
 Other two elements​ 
    defending kingdom and it's general​,
*/

/* 
   Compare the two general armies and whoever has the ​larger army wins​.

   The ​winner’s army​ will ​increase ​by ​10%​ 
   the ​loser’s army ​will ​decrease ​by​ 10%​. 
   Keep in mind 
    ***armies should be ​round down​ if there is any​ excess army after the battle​. 
    // Math.floor()***

   if(battle is a ​draw){
       ​do not do anything​. 
   }

   Keep track of the ​win​ and ​lose count ​of each general.
   ​****generals​ from the ​same kingdom​​ cannot​ ​attack​ ​each other​.****

   After you finished all battles, determine ​which ​kingdom​​ wins​ the game. 
   To decide that, ​order them ​by all their ​general’s wins (descending)​ then by their ​losses (ascending), 
   finally by the ​kingdom’s name ​in ascending alphabetical​ order. 
   In short, the kingdom with the most wins and few losses is the game-winner.
*/

/* 
Print the winning kingdom and ​sort ​the generals by their ​armies in​​descending ​order
*/

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
    populateMap(kingsArrObj);
    battleArmies(listedBattleArr);
    // {
    //     'Maiden Way': Map(4) {
    //       'kingWins' => 1,
    //       'kingLosses' => 2,
    //       'Merek' => { army: 4050, genWins: 0, genLosses: 2 },'Berinon' => { army: 110000, genWins: 1, genLosses:
    //   0 }
    //     },
    //     Stonegate: Map(4) {
    //       'kingWins' => 3,
    //       'kingLosses' => 1,
    //       'Ulric' => { army: 5336, genWins: 2, genLosses: 1 },'Doran' => { army: 77000, genWins: 1, genLosses: 0 }  },
    //     YorkenShire: Map(3) {
    //       'kingWins' => 0,
    //       'kingLosses' => 1,
    //       'Quinn' => { army: 1800, genWins: 0, genLosses: 1 }
    //     }
    // }

    let winnerObj = mostWins(allKingdoms);
    // console.log(winnerObj.generals);
    printWinner(winnerObj);
}

function populateMap(arr) {
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
            allKingdoms[kingdom].get(general)["army"] += armySize;
        }
    }
}

function battleArmies(arr) {
    for (let battle of arr) {
        const [attackKing, attackGen, defKing, defGen] = battle;
        const aGeneral = allKingdoms[attackKing].get(attackGen);
        const dGeneral = allKingdoms[defKing].get(defGen);

        if (attackKing !== defKing && aGeneral.army > dGeneral.army) {
            aGeneral.genWins++;
            dGeneral.genLosses++;
            allKingdoms[attackKing].set(
                "kingWins",
                allKingdoms[attackKing].get("kingWins") + 1
            );
            allKingdoms[defKing].set(
                "kingLosses",
                allKingdoms[defKing].get("kingLosses") + 1
            );
            aGeneral.army = Math.floor(aGeneral.army * 1.1);
            dGeneral.army = Math.floor(dGeneral.army * 0.9);
        } else if (attackKing !== defKing && aGeneral.army < dGeneral.army) {
            dGeneral.genWins++;
            aGeneral.genLosses++;
            allKingdoms[defKing].set(
                "kingWins",
                allKingdoms[defKing].get("kingWins") + 1
            );
            allKingdoms[attackKing].set(
                "kingLosses",
                allKingdoms[attackKing].get("kingLosses") + 1
            );
            dGeneral.army = Math.floor(dGeneral.army * 1.1);
            aGeneral.army = Math.floor(aGeneral.army * 0.9);
        }
    }
}

function mostWins(obj) {
    let allKingdomsArr = Object.entries(obj);

    allKingdomsArr.forEach((kingdom, index) => {
        kingdom.forEach((kingInfo, index) => {
            if (index % 2 !== 0) {
                kingInfo = Array.from(kingInfo);
                kingdom.splice(1, 1, kingInfo);
                kingInfo.forEach((thing, index) => {
                    if (typeof thing[1] === "object") {
                        thing[1] = Object.entries(thing[1]);
                    }
                });
            }
        });
        allKingdomsArr.splice(index, 1, kingdom);
    });

    allKingdomsArr.sort((a, b) => b[1][0][1] - a[1][0][1]);

    // console.log(allKingdomsArr[0]);

    let winnerObj = {};

    winnerObj.kingdom = allKingdomsArr[0][0];
    winnerObj.generals = [];

    allKingdomsArr[0][1].forEach((infoPiece, index) => {
        if (index > 1) {
            // console.log(infoPiece);
            winnerObj.generals.push(infoPiece);
        }
    });

    winnerObj.generals.sort(
        (a, b) =>
            (b[1][1][1] - a[1][1][1] && a[1][2][1] - b[1][2][1]) ||
            a[0].localeCompare(b[0])
    );

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

/* 
Winner: Stonegate
/\general: Doran
---army: 77000
---wins: 1
---losses: 0
/\general: Ulric
---army: 5336
---wins: 2
---losses: 1
*/

/* 
After you successfully store the kingdoms information, 
First battle’s result is victory for the defender Ulric and a loss for the attacker Quinn. 
Second battle is ignored because the generals are from the same kingdom. 
Third battle is a victory for Doran and a loss for Merek. 
Fourth battle is a win for Ulric and a loss for Merek. 
Fifth battle is a victory for Berinon and a defeat for Ulric. 
All winners increase their armies with 10% for each win and 
all losers decrease their armies with 10% for each loss.
The result from the battles are
–Stonegate: 3 wins and 1 loss;
-Maiden Way: 1 win and 2 losses;
-YorkenShire: 0 wins and 1 loss. 
Making Stonegate the winner of the games because they have the most wins from kingdoms.
*/

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

/* 
Winner: YorkenShire
/\general: Quinn
---army: 5500
---wins: 1
---losses: 0
*/

/* 
The first battle between Quinn and Ulric is a draw because 
they have even armies because of that it is not recorded and 
their armies size does not change.
The second battle is a win for Quinn and a loss for 
Berinon making YorkenShire the winner of the game with 1 win and 0 losses.
*/

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

/*
Winner: Maiden Way
/\general: Merek
---army: 5500
---wins: 1
---losses: 0 
 */
