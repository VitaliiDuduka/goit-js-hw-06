const fontSize = document.querySelector("#font-size-control");
const fontValue = document.querySelector("#text");
fontValue.style.fontSize = '56px';
fontSize.addEventListener("input", () => {
    fontValue.style.fontSize =`${fontSize.value}px`;
});

