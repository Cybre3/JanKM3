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

class Kingdom {
    constructor(kingdom, general, army, wins, losses) {
        this.kingdom = kingdom;
        this.general = general;
        this.army = +army;
        this.wins = +wins;
        this.losses = +losses;
    }

    winner() {
        console.log(`Winner: ${this.kingdom}\n${this.general}`);
    }

    general() {
        console.log(
            `/\general: ${this.general}\n---army: ${this.army}\n---wins: ${this.wins}---losses: ${this.losses}`
        );
    }

    
}

let allKingdoms = new Map();

function main(kingsArrObj, listedBattleArr) {
    allKingdoms.clear();
    populateMap(kingsArrObj);
    console.log(allKingdoms);
}

function populateMap(arr) {
    for (let kingsObj of arr) {
        let [kingdom, general, armySize] = Object.values(kingsObj);

        if (!allKingdoms.has(kingdom)) {
            allKingdoms.set(kingdom, new Map());
        }

        if (!allKingdoms.get(kingdom).has(general)) {
            allKingdoms.get(kingdom).set(general, armySize);
        } else if (allKingdoms.get(kingdom).has(general)) {
            allKingdoms
                .get(kingdom)
                .set(general, allKingdoms.get(kingdom).get(general) + armySize);
        }
    }
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
