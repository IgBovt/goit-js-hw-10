import iziToast from 'izitoast';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', getResult);

function getResult(e) {
  e.preventDefault();

  const inputData = e.currentTarget.elements.delay.value;
  const checkboxData = e.currentTarget.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkboxData === 'fulfilled') {
        resolve('fulfilled');
      }
      reject('reject');
    }, inputData);
  });

  promise
    .then(value => {
      iziToast.success({
        title: 'OK',
        titleColor: '#fff',
        message: `Fulfilled promise in ${inputData}ms`,
        messageColor: '#fff',
        iconUrl: 'img/1.svg',
        position: 'topRight',
        backgroundColor: '#59A10D',
      });
    })
    .catch(error => {
      iziToast.warning({
        title: 'Error',
        message: `Rejected promise in ${inputData}ms`,
        titleColor: '#fff',
        messageColor: '#fff',
        iconUrl: 'img/2.svg',
        backgroundColor: '#EF4040',
        position: 'topRight',
      });
    });

  formRef.reset();
}
