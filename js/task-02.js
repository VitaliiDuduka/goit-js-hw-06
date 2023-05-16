const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const components = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = [ingredient];
  return liEl;
});

document.querySelector("#ingredients").append(...components);

