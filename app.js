const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startbtn');
const stopbtn = document.getElementById('stopbtn');

let timeLeft;
let timeInterval;
let isRunnig = false;

const startimer = duration => {
  let timer = duration;
  timeInterval = setInterval(() => {
    const minuts = parseInt(timer / 60, 10);
    const second = parseInt(timer % 60, 10);
    const displayMinuts = minuts < 10 ? '0' + minuts : minuts;
    const displaySeconds = second < 10 ? '0' + second : second;
    timerDisplay.textContent = displayMinuts + ':' + displaySeconds;

    if (--timer < 0) {
      clearInterval(timeInterval);
      timerDisplay.textContent = 'Breath Out';
      setTimeout(() => {
        timerDisplay.textContent = 'Breath In';
        startimer(timeLeft);
      }, 3000);
    }
  }, 1000);
};

const stoptimer = () => {
  clearInterval(timeInterval);
  timerDisplay.textContent = 'Breath In';
  isRunnig = false;
};

startBtn.addEventListener('click', () => {
  if (!isRunnig) {
    timeLeft = 120;
    startimer(timeLeft);
    isRunnig = true;
  }
});

stopbtn.addEventListener('click', () => {
  stoptimer();
  isRunnig = false;
});
