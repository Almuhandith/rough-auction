const startingTime = 50;
let time = startingTime * 60 * 60;

const countdownEl = document.getElementsByClassName('countDown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const hours = Math.floor(time / 360);
    const minutes = time / 60;
    let seconds = time % 60;

    countdownEl.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    time--;
} 

