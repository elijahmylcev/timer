const deadLine = document.querySelector('#end');
const btn = document.querySelector('button');



function getTimerRemaining(endtime) {
    const t = Date.parse(endtime) - new Date();
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor(t / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(t / (1000 * 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timerInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimerRemaining(endtime);

        days.innerText = getZero(t.days);
        hours.innerText = getZero(t.hours);
        minutes.innerText = getZero(t.minutes);
        seconds.innerText = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timerInterval);
        }
    }
}

btn.addEventListener('click', () => {
    setClock('.wrapper', deadLine.value);
});