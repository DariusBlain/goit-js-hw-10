import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//______________________________________________________________________

const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('.btn');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
btn.disabled = true;

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Number(selectedDates[0]) <= Date.now()) {
      iziToast.error({
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(181, 27, 27)',
        backgroundColor: 'rgb(239, 64, 64)',
        iconUrl: '../img/error.svg',
        message: 'Please choose a date in the future',
        messageColor: 'rgb(255, 255, 255)',
      });
    } else {
      btn.disabled = false;
      userSelectedDate = selectedDates[0];
      console.log(userSelectedDate);
    }
  },
};

flatpickr('#datetime-picker', options);

//________________Timer-Function_________________//

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

//______________________________________________________//

class Timer {
  constructor({ onTick }) {
    this.isActive = false;
    this.onTick = onTick;
    this.intervalId = null;
  }

  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Number(userSelectedDate);
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const time = convertMs(deltaTime);
      this.onTick(time);
    }, 1000);
    btn.disabled = true;
    input.disabled = true;
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }
}

const timer = new Timer({
  onTick: updateClockface,
});

function updateClockface({ days, hours, minutes, seconds }) {
  daysSpan.textContent = addLeadingZero(days);
  hoursSpan.textContent = addLeadingZero(hours);
  minutesSpan.textContent = addLeadingZero(minutes);
  secondsSpan.textContent = addLeadingZero(seconds);

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    timer.stop();
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

btn.addEventListener('click', timer.start.bind(timer));
