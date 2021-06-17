function populateGladPool(arr) {
    if (!gladPoolObj[glad]) {
        gladPoolObj[glad] = {};
    }

    if (!gladPoolObj[glad][technique]) {
        gladPoolObj[glad][technique] = skill;
    } else if (gladPoolObj[glad][technique] < skill) {
        gladPoolObj[glad][technique] = skill;
    }
}