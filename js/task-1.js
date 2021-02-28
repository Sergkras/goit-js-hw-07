
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
