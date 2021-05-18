let gladPoolObj = {};

function main(gladiatorPoolArr) {
    let tempArr = [...gladiatorPoolArr];
    let gladInfo = tempArr.shift();

    while (gladInfo !== "Ave Cesar") {
        if (gladInfo.includes("->")) {
            populateGladPool(gladInfo);
        } else {
            duelMatch(gladInfo);
        }

        gladInfo = tempArr.shift();
    }

    // console.log(gladPoolObj);

    prntSurvivers();
}

function populateGladPool(arr) {
    let [glad, technique, skill] = arr.split(" -> ");
    skill = +skill;

    if (!gladPoolObj[glad]) {
        gladPoolObj[glad] = {};
    }

    if (!gladPoolObj[glad][technique]) {
        gladPoolObj[glad][technique] = skill;
    } else if (gladPoolObj[glad][technique] < skill) {
        gladPoolObj[glad][technique] = skill;
    }
}

function duelMatch(arr) {
    let [glad1, glad2] = arr.split(" vs ");

    if (gladPoolObj[glad1] && gladPoolObj[glad2]) {
        let glad1SkillsArr = Object.keys(gladPoolObj[glad1]);
        let glad2SkillsArr = Object.keys(gladPoolObj[glad2]);
        // console.log(glad1, glad2);
        // console.log(glad1SkillsArr);
        // console.log(glad2SkillsArr);

        for (let tech in glad1SkillsArr) {
            if (glad2SkillsArr.includes(glad1SkillsArr[tech])) {
                // console.log(glad1SkillsArr[tech]);
                const techIndex = glad2SkillsArr.indexOf(glad1SkillsArr[tech]);
                // console.log(glad2SkillsArr[techIndex]);
                const glad1SkillNum = gladPoolObj[glad1][glad1SkillsArr[tech]];
                const glad2SkillNum =
                    gladPoolObj[glad2][glad2SkillsArr[techIndex]];
                // console.log(glad1SkillNum);
                // console.log(glad2SkillNum);
                glad1SkillNum > glad2SkillNum
                    ? delete gladPoolObj[glad2]
                    : delete gladPoolObj[glad1];
                break;
            }
        }
    }
}

function skillSum(arr) {
    let sum = 0;

    let skillsNumArr = Object.values(arr[1]);

    for (let skillNum of skillsNumArr) {
        sum += +skillNum;
    }

    return sum;
}

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

main([
    "Pesho -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 250",
    "Gladius -> Shield -> 250",
    "Pesho vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Gosho",
    "Ave Cesar",
]);
