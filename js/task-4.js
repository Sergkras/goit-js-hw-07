const counterValue = document.querySelector('#value');

const counterRef = document.querySelector('#counter');
const onBtnDec = document.querySelector('button[data-action="decrement"]');
const onBtnInc = document.querySelector('button[data-action="increment"]');

const addNumber = () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
};
const removeNumber = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
};
onBtnDec.addEventListener('click', removeNumber);
onBtnInc.addEventListener('click', addNumber);
