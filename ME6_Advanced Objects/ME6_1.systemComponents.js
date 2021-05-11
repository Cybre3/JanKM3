function main(systemArr) {
    let systemObj = {};

    for (let systemName of systemArr) {
        fillObj(systemName, systemObj);
    }

    formatObj(systemObj);
}

function fillObj(system, systemObj) {
    let [systemName, component, subComponent] = system.split(' | ');

    if (!systemObj.hasOwnProperty(systemName)) {
        systemObj[systemName] = {};
    }

    if (!systemObj[systemName][component]) {
        systemObj[systemName][component] = [subComponent];
    } else {
        systemObj[systemName][component].push(subComponent);
    }

    return systemObj;
}

function formatObj(obj) {
    let arrOfconvertedsystemObj = Object.entries(obj);

    return arrOfconvertedsystemObj.forEach((system) => {
        console.log(system.shift());

        let arrOfConvertedCompObj = Object.entries(system.shift());
        arrOfConvertedCompObj.sort(
            (a, b) =>
                (b[0].length - a[0].length || a[0].localeCompare(b[0])) &&
                b[1].length - a[1].length
        );

        arrOfConvertedCompObj.forEach((comp) => {
            console.log(`|||${comp.shift()}`);
            comp.shift().forEach((subComp) => console.log(`||||||${subComp}`));
        });
    });
}

main([
    'KLLS | Main Site | Home Page',
    'KLLS | Main Site | Login Page',
    'KLLS | Main Site | Register Page',
    'KLLS | Populi Site | Login Page',
    'KLLS | Populi Site | Submission Page',
    'Lambda | CoreA | A23',
    'KLLS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
]);
