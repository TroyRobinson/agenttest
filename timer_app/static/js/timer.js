```javascript
let timerList = [];
let currentTimerIndex = 0;
let intervalId = null;

class Timer {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
    this.remaining = duration * 60;
  }
}

function createTimer(title, duration) {
  const timer = new Timer(title, duration);
  timerList.push(timer);
  saveTimersToCache();
}

function startTimerSeries() {
  if (timerList.length === 0) return;
  currentTimerIndex = 0;
  startTimer(timerList[currentTimerIndex]);
}

function startTimer(timer) {
  intervalId = setInterval(() => {
    timer.remaining--;
    if (timer.remaining <= 0) {
      clearInterval(intervalId);
      document.getElementById(`timer-${currentTimerIndex}`).classList.add('greyed-out');
      currentTimerIndex++;
      if (currentTimerIndex < timerList.length) {
        startTimer(timerList[currentTimerIndex]);
      }
    }
  }, 1000);
}

function pauseTimer() {
  if (intervalId) {
    clearInterval(intervalId);
  }
}

function resumeTimer() {
  if (currentTimerIndex < timerList.length) {
    startTimer(timerList[currentTimerIndex]);
  }
}

document.getElementById('play-button').addEventListener('click', startTimerSeries);
document.getElementById('pause-button').addEventListener('click', pauseTimer);

window.addEventListener('load', () => {
  loadTimersFromCache();
  timerList.forEach((timer, index) => {
    const timerElement = document.createElement('div');
    timerElement.id = `timer-${index}`;
    timerElement.innerText = `${timer.title} - ${timer.duration} minutes`;
    document.getElementById('timer-container').appendChild(timerElement);
  });
});
```