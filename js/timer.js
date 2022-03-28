const timerBlock = document.querySelector('.main-display__timer');
const deadLine = '01 april 2022';

let interval;

const updateClock = () => {
    const date = new Date().getTime();
    const dateNew = new Date(deadLine).getTime();
    const timeRemaining = (dateNew - date) / 1000;

    const hours = Math.floor(timeRemaining / 60 / 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSecond = seconds < 10 ? '0' + seconds : seconds;

    timerBlock.textContent = `${fHours}:${fMinutes}:${fSecond}`;
};

interval = setInterval(updateClock, 500);