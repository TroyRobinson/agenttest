```javascript
// Cache management for Timer App

// Save current timers to local storage
function saveTimersToCache(timerList, currentTimerIndex) {
    localStorage.setItem('timerList', JSON.stringify(timerList));
    localStorage.setItem('currentTimerIndex', currentTimerIndex);
}

// Load timers from local storage
function loadTimersFromCache() {
    let timerList = JSON.parse(localStorage.getItem('timerList'));
    let currentTimerIndex = localStorage.getItem('currentTimerIndex');

    // If there are no timers in local storage, initialize with empty array
    if (!timerList) {
        timerList = [];
    }

    // If there is no current timer index in local storage, initialize with 0
    if (!currentTimerIndex) {
        currentTimerIndex = 0;
    }

    return { timerList, currentTimerIndex };
}
```