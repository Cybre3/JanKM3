function main(numSteps, stpLngthMeters, speedKmh) {
    const breakInMins = Math.floor((numSteps * stpLngthMeters) / 500);
    const distanceMtrs = numSteps * stpLngthMeters;
    const speedMh = speedKmh * 1000;
    let hours = Math.floor(distanceMtrs / speedMh);
    let mins =
        breakInMins + Math.floor((distanceMtrs / speedMh) * 60);
    let secs = Math.ceil(
        ((breakInMins + (distanceMtrs / speedMh) * 60) * 60) % 60
    );
    
    console.log(formatTime(hours, mins, secs));
}

function formatTime(hours, mins, secs) {
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (secs < 10) {
        secs = '0' + secs;
    }
    return hours + ':' + mins + ':' + secs;
}

main(4000, 0.6, 5);
main(2564, 0.7, 5.5);
