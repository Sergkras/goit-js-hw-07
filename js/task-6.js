const inputRef = document.querySelector("#validation-input");

function blurFocus(event) {
    event.preventDefault();
    if (
        `${event.currentTarget.value.length}` ===
        `${inputRef.getAttribute("data-length")}`
    ) {
        return inputRef.setAttribute("class", "valid");
    }
    return inputRef.setAttribute("class", "invalid");
}
inputRef.addEventListener("blur", blurFocus);
