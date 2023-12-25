import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import { updateClockFace } from './1-updateClockFace';
import { convertMs } from './1-math-function';
import { refs } from './1-refs';

// ====== EVENT LISTENERS ===== //
// ====== EVENT LISTENERS ===== //

refs.button.addEventListener('click', handleTimer);
refs.btnStop.addEventListener('click', stopTimer);

let intervalID = null;
let isActive = false;
let userSelectedDate = null;
const date = Date.now();

// ====== LIBRARY ====== //
// ====== LIBRARY ====== //
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
      iziToast.warning({
        title: 'Warning',
        message: 'Please choose a date in the future',
        position: 'topLeft',
      });
    } else {
      refs.button.classList.add('is-active-btn');
      refs.button.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

// ====== MAIN Function ===== //
// ====== MAIN Function ===== //

function handleTimer() {
  if (isActive) {
    return;
  }
  isActive = true;

  intervalID = setInterval(() => {
    updateClockFace(convertMs(userSelectedDate - Date.now()));
    if (userSelectedDate - Date.now() <= 0) {
      stopTimer();
    }
  }, 1000);

  refs.input.setAttribute('disabled', '');
  refs.btnStop.classList.add('stop-btn-active');
}

// ====== STOP FUNCTION ====//
// ====== STOP FUNCTION ====//
function stopTimer() {
  clearInterval(intervalID);
  isActive = false;
  refs.input.removeAttribute('disabled');

  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';
  refs.seconds.textContent = '00';
  refs.btnStop.classList.remove('stop-btn-active');
}
