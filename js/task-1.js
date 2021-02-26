
const elemRef = document.querySelector('#categories');
console.log(`В списке ${elemRef.children.length} категории.`);

const itemRef = elemRef.querySelectorAll('.item');

const resultLog = iterEl => {
    const titleLog = iterEl.querySelector('h2');
    const liLog = iterEl.querySelectorAll('li');
    console.log(`Категория: ${titleLog.textContent}
Количество элементов: ${liLog.length}`);
};
console.log(itemRef.forEach(iterEl => resultLog(iterEl)));