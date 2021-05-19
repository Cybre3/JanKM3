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