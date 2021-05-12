function main(gladiatorPoolArr) {

    let tempArr = [...gladiatorPoolArr];
    let gladiatorPoolObj = {};

    let heroInfo = tempArr.shift().split(' -> ');

    while(heroInfo.length !== 1) {
        let [gladiator, technique, skill] = heroInfo;
        skill = +skill;

        if (!gladiatorPoolObj[gladiator]) {
            gladiatorPoolObj[gladiator] = {};
        }

        if (!gladiatorPoolObj[gladiator][technique]) {
            gladiatorPoolObj[gladiator][technique] = skill;
        } else {
            gladiatorPoolObj[gladiator][technique] += skill;
        }

    heroInfo = tempArr.shift().split(' -> '); 
    }

    console.log(gladiatorPoolObj); 

}

main([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar',
]);
