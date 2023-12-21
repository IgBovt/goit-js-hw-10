export { userSelectedDate, date, options };

let userSelectedDate = null;
const date = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (date > selectedDates[0].getTime()) {
      alert('Please choose a date in the future');
    }
  },
};
