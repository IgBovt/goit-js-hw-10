import iziToast from 'izitoast';
import succ from '../img/1.svg';
import err from '../img/2.svg';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', getResult);

function getResult(e) {
  e.preventDefault();

  const inputData = e.currentTarget.elements.delay.value;
  const checkboxData = e.currentTarget.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkboxData === 'fulfilled') {
        resolve(`Fulfilled promise in ${inputData}ms`);
      }
      reject(`Rejected promise in ${inputData}ms`);
    }, inputData);
  });

  promise
    .then(value => {
      iziToast.success({
        title: 'OK',
        titleColor: '#fff',
        message: value,
        messageColor: '#fff',
        iconUrl: `${succ}`,
        position: 'topRight',
        backgroundColor: '#59A10D',
      });
    })
    .catch(error => {
      iziToast.warning({
        title: 'Error',
        message: error,
        titleColor: '#fff',
        messageColor: '#fff',
        iconUrl: `${err}`,
        backgroundColor: '#EF4040',
        position: 'topRight',
      });
    });

  formRef.reset();
}
