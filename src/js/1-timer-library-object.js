// export { userSelectedDate, date, options };
// import { refs } from './1-timer';

// let userSelectedDate = null;
// const date = Date.now();

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     userSelectedDate = selectedDates[0];

//     if (date > selectedDates[0].getTime()) {
//       refs.button.classList.remove('is-active-btn');
//       refs.button.setAttribute('disabled', '');
//       alert('Please choose a date in the future');
//     } else {
//       refs.button.classList.add('is-active-btn');
//       refs.button.removeAttribute('disabled');
//     }
//   },
// };

// flatpickr('#datetime-picker', options);
