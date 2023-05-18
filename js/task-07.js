const fontSize = document.querySelector("#font-size-control");
const fontValue = document.querySelector("#text");
fontSize.addEventListener("input", () => {
    fontValue.style.fontSize =`${fontSize.value}px`;
});

