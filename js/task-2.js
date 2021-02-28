const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы'
];
const ingredientsRef = document.querySelector('#ingredients');

const arrayRef = ingredients.map(elem => {
    const creatliRef = document.createElement('li');
    creatliRef.textContent = elem;
    return creatliRef;
});

ingredientsRef.append(...arrayRef);
