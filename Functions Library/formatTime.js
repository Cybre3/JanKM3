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


function formatTime() {
    if(seconds === 60){
        minutes++;
        seconds = 0;
    }
    timeBlock.textContent = `${minutes < 10 ? `0` + minutes : mintues}:${seconds < 10 ? `0` + seconds : seconds}`;
    seconds++;
}