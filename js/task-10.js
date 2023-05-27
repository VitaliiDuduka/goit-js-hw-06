const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  numbersEl: document.querySelector("[type=number]"),
  boxesEl: document.querySelector("#boxes"),
  boxesArray: [],
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  refs.boxesArray = [];
  refs.boxesEl.innerHTML = "";

  for (let i = 1; i <= refs.numbersEl.value; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = 20 + 10 * i + "px";
    boxEl.style.height = 20 + 10 * i + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.margin = "20px";
    boxEl.style.display = "block";

    refs.boxesArray.push(boxEl);
  }

  refs.boxesEl.append(...refs.boxesArray);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.boxesArray = [];
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
