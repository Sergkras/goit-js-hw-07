const sizeFontRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

sizeFontRef.addEventListener("input", chengSizeRef);

function chengSizeRef(event) {
    textRef.style.fontSize = `${event.currentTarget.value}px`;
};
