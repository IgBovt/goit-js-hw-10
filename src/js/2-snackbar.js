import iziToast from 'izitoast';

const formRef = document.querySelector('.form');
const btnRef = document.querySelector('.js-btn');
const dataObject = {
  checkbox: '',
  input: '',
};

formRef.addEventListener('input', getValue);
btnRef.addEventListener('click', getResult);

function getValue(e) {
  return (
    (dataObject.checkbox = e.currentTarget.elements.state.value),
    (dataObject.input = e.currentTarget.elements.delay.value)
  );
}

function getResult(e) {
  e.preventDefault();
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dataObject.checkbox === 'fulfilled') {
        resolve('fulfilled');
      }
      reject('reject');
    }, dataObject.input);
  });

  promise.then(
    result =>
      iziToast.success({
        title: 'OK',
        titleColor: '#fff',
        message: `Fulfilled promise in ${dataObject.input}ms`,
        messageColor: '#fff',
        iconUrl: '../img/bi_check2-circle.svg',
        position: 'topRight',
        backgroundColor: '#59A10D',
      }),
    error =>
      iziToast.warning({
        title: 'Error',
        message: `Rejected promise in ${dataObject.input}ms`,
        titleColor: '#fff',
        messageColor: '#fff',
        iconUrl: '../img/bi_x-octagon.svg',
        backgroundColor: '#EF4040',
        position: 'topRight',
      })
  );

  formRef.reset();
}
