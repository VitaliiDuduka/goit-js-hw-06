const currentValue = document.querySelector("#value");

const increase = document.querySelector('button[data-action="increment"]');

const decrease = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

increase.addEventListener("click", ButtonIncrease);

decrease.addEventListener("click", ButtonDecrease);

function ButtonIncrease() {
    counterValue += 1;
    currentValue.textContent = counterValue;
}

function ButtonDecrease() {
    counterValue -= 1;
    currentValue.textContent = counterValue;
}