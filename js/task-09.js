const refs = {
  color: document.querySelector('.widget'),
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
}

refs.button.addEventListener('click', () => {
  refs.span.textContent = getRandomHexColor();
  refs.color.parentNode.style.backgroundColor = getRandomHexColor();
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

