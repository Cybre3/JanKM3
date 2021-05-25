let [seconds, minutes] = [01,00];

const timeBlock = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const body = document.querySelector('body');
timer = null;

function stopwatch() {
    body.addEventListener('click', btnToggle);
}

function btnToggle(e) {
    if(e.target.textContent === 'Start') {
        timer = setInterval(formatTime, 1000);
        e.target.disabled = true;
        e.target.nextElementSibling.disabled = false;
        // console.log(setInterval(test, 1000));
    } else if(e.target.textContent === 'Stop') {
        clearInterval(timer);
        timeBlock.textContent = `00:00`;
        [seconds, minutes] = [01,00];
        e.target.disabled = true;
        e.target.previousElementSibling.disabled = false;
    }
}

function formatTime() {
    if(seconds === 60){
        minutes++;
        seconds = 0;
    }
    timeBlock.textContent = `${minutes < 10 ? `0` + minutes : mintues}:${seconds < 10 ? `0` + seconds : seconds}`;
    seconds++;
}