// Select elements
const pomodoroBtn = document.getElementById("pomodoro-session");
const shortBtn = document.getElementById("short-break");
const longBtn = document.getElementById("Long-Break");

const pomodoroTimer = document.getElementById("pomodoro-timer");
const shortTimer = document.getElementById("short-timer");
const longTimer = document.getElementById("long-timer");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

const message = document.getElementById("timer-message");

let activeTimer = null;
let interval = null;
let timeLeft = 0;

// Beep sound
const beep = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");

// Utility: format time as MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Hide all timers
function resetTimers() {
  [pomodoroTimer, shortTimer, longTimer].forEach((t) => {
    t.classList.remove("active");
  });
}

// Set a timer as active
function setActiveTimer(timerEl) {
  resetTimers();
  timerEl.classList.add("active");
  activeTimer = timerEl;
  timeLeft = Math.floor(parseFloat(timerEl.dataset.duration) * 60);
  updateDisplay();
  message.textContent = "Ready to start!";
}

// Update display
function updateDisplay() {
  if (activeTimer) {
    const display = activeTimer.querySelector(".time");
    display.textContent = formatTime(timeLeft);
  }
}

// Countdown logic
function startTimer() {
  if (!activeTimer) {
    message.textContent = "⚠️ Please select a timer before starting!";
    return;
  }
  if (interval) return; // prevent multiple intervals

  message.textContent = "⏳ Timer is running...";
  interval = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(interval);
      interval = null;
      beep.play(); 
      alert("⏰ Time's up! Take a break.");
      message.textContent = "✅ Time's up!";
    }
  }, 1000);
}


function stopTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    message.textContent = "⏸️ Timer stopped.";
  }
}


pomodoroBtn.addEventListener("click", () => setActiveTimer(pomodoroTimer));
shortBtn.addEventListener("click", () => setActiveTimer(shortTimer));
longBtn.addEventListener("click", () => setActiveTimer(longTimer));

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);


window.onload = () => {
  setActiveTimer(pomodoroTimer);
};
