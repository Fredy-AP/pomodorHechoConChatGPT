var minutes = 25;
var seconds = 30;
var isRunning = false;
var intervalId;
var alarmSound = document.getElementById('alarmSound');

function updateTimer() {
  var timerElement = document.getElementById('timer');
  timerElement.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(decrementTimer, 1000);
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }
}

function decrementTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(intervalId);
    isRunning = false;
    playAlarmSound();
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateTimer();
  }
}

function resetTimer() {
  clearInterval(intervalId);
  minutes = 25;
  seconds = 0;
  isRunning = false;
  updateTimer();
  alarmSound.pause();
  alarmSound.currentTime = 0;
}

function playAlarmSound() {
  alarmSound.play();
  setTimeout(stopAlarmSound, 30000); // Detener la reproducción después de 30 segundos (30000 milisegundos)
}

function stopAlarmSound() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
