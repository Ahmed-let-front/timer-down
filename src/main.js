import "./css/main.css";
const elements = {
  DDEL: document.getElementById("count-day"),
  HHEL: document.getElementById("count-h"),
  MMEL: document.getElementById("count-min"),
  SSEL: document.getElementById("count-sec"),
  totalSeconds: 0,
};
const updataUi = (data) => {
  elements.DDEL.textContent = data.DD;
  elements.HHEL.textContent = data.HH;
  elements.MMEL.textContent = data.MM;
  elements.SSEL.textContent = data.SS;
};
const ubdateTimer = () => {
  const DD = Math.floor(elements.totalSeconds / (3600 * 24))
    .toString()
    .padStart(2, "0");
  const HH = Math.floor((elements.totalSeconds % (3600 * 24)) / 3600)
    .toString()
    .padStart(2, "0");
  const MM = Math.floor((elements.totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const SS = Math.floor(elements.totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return { DD, HH, MM, SS };
};
const counter = (days) => {
  elements.totalSeconds = days * 24 * 60 * 60;
  updataUi(ubdateTimer());
  const timeInterval = setInterval(() => {
    if (elements.totalSeconds <= 0) {
      clearInterval(timeInterval);
      return;
    }
    elements.totalSeconds = Math.floor(elements.totalSeconds - 1);
    console.log(elements.totalSeconds);
    updataUi(ubdateTimer());
  }, 1000);
};
counter(4);
