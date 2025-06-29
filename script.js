let timer;
let [seconds, minutes, hours] = [0, 0, 0];
let isRunning = false;

const display = document.getElementById("display");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

startPauseBtn.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    startPauseBtn.textContent = "Pause";
    isRunning = true;
  } else {
    clearInterval(timer);
    startPauseBtn.textContent = "Start";
    isRunning = false;
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  display.textContent = "00:00:00";
  startPauseBtn.textContent = "Start";
  isRunning = false;
  laps.innerHTML = "";
});

lapBtn.addEventListener("click", () => {
  if (isRunning) {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
});

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value.toString().padStart(2, "0");
}
