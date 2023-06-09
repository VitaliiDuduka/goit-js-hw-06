const refs = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  body: document.querySelector('body'),
}

refs.button.addEventListener('click', () => {
  refs.span.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.span.textContent;
  })

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

