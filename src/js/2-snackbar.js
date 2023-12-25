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
  const promise = new Promise(() => {
    setTimeout(() => {}, dataObject.input);
  });
}
