import flatpickr from 'flatpickr';

const refs = {
  button: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let userSelectedDate = null;
const date = Date.now();
refs.button.addEventListener('click', handleTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (date > selectedDates[0].getTime()) {
      refs.button.classList.remove('is-active-btn');
      refs.button.setAttribute('disabled', '');
      alert('Please choose a date in the future');
    } else {
      refs.button.classList.add('is-active-btn');
      refs.button.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function handleTimer() {
  const intervalID = setInterval(() => {
    console.log(convertMs(userSelectedDate - Date.now()));
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
