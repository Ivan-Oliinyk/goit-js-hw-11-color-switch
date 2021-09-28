const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  btnStart: document.querySelector("[data-action='start']"),
  btnStop: document.querySelector("[data-action='stop']"),
  body: document.body,
};

let intervalId = null;
let isActive = false;

refs.btnStart.addEventListener("click", start);
refs.btnStop.addEventListener("click", stop);

function start() {
  if (isActive) {
    return;
  }

  isActive = true;

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomColor(colors);
  }, 500);
}

function stop() {
  clearInterval(intervalId);
  isActive = false;
}

function getRandomColor(colors) {
  return colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
