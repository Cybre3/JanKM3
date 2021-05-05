function main(driverSpeedArr) {
    const driverSpeed = driverSpeedArr[0];
    const area = driverSpeedArr[1];

    if (driverSpeed > speedLimit(area) + 40) {
        console.log('reckless driving');
    } else if (driverSpeed > speedLimit(area) + 20) {
        console.log('excessive speeding');
    } else if (driverSpeed > speedLimit(area)) {
        console.log('speeding');
    }
}

function speedLimit(area) {
    switch (area) {
        case 'motorway':
            return 130;
        case 'interstate':
            return 90;
        case 'city':
            return 50;
        case 'residential':
            return 20;
    }
}

main([40, 'city']);
main([21, 'residential']);
main([120, 'interstate']);
main([200, 'motorway']);
