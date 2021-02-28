const holderRef = document.querySelector('#name-input');
const textOutRef = document.querySelector('#name-output');

holderRef.addEventListener('input', onAddText);

function onAddText(event) {
    textOutRef.textContent = (event.currentTarget.value === "") ? 'незнакомец' : event.currentTarget.value;
};
