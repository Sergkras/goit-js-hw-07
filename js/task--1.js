
// Посчитает и выведет в консоль количество категорий в ul#categories, 
//      то есть элементов li.item.Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет 
//      в консоль текст заголовка элемента(тега h2) и количество элементов 
//      в категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const elemRef = document.querySelector('#categories');
console.log(`В списке ${elemRef.children.length} категории.`);

const itemRef = elemRef.querySelectorAll('.item');
const elemLog = item => {
    const itemHeader = item.querySelector('h2');
    const itemElements = item.querySelectorAll('ul li');
    console.log(`Категория: ${itemHeader.textContent}
Количество элементов: ${itemElements.length}`);
};
console.log(itemRef.forEach(item => elemLog(item)));
