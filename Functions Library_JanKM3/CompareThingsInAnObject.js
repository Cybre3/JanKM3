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