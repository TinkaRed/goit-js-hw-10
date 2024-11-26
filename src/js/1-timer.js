// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

//querySelectorи для всіх елементів
const datetimePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

let dateSelect = null;
let timer = null;

//шматок коду з завдання - start
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      window.alert("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      dateSelect = selectedDate;
      startButton.disabled = false;
    }
  },
};
//шматок коду з завдання - end

//ініціалізую Flatpickr
flatpickr(datetimePicker, options);

//кнопка старт
startButton.addEventListener("click", () => {
if (!dateSelect) return;

startButton.disabled = true;
datetimePicker.disabled = true;

timer = setInterval(() => {
    const timeLeft = dateSelect - new Date();

    if (timeLeft <= 0) {
    clearInterval(timer);
    updateTimerDisplay(0, 0, 0, 0);
    datetimePicker.disabled = false;
    return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    updateTimerDisplay(days, hours, minutes, seconds);
}, 1000);
});

// the code from the task - don't change - start
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// the code from the task - don't change - end

function updateTimerDisplay(days, hours, minutes, seconds) {
daysEl.textContent = addLeadingZero(days);
hoursEl.textContent = addLeadingZero(hours);
minutesEl.textContent = addLeadingZero(minutes);
secondsEl.textContent = addLeadingZero(seconds);
}

//додано нуль для одиночного числа
function addLeadingZero(value) {
return String(value).padStart(2, "0");
}