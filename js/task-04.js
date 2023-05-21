const currentValue = document.querySelector("#value");

const increase = document.querySelector('button[data-action="increment"]');

const decrease = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

increase.addEventListener("click", onButtonIncrease);

decrease.addEventListener("click", onButtonDecrease);

function onButtonIncrease() {
    counterValue += 1;
    currentValue.textContent = counterValue;
}

function onButtonDecrease() {
    counterValue -= 1;
    currentValue.textContent = counterValue;
}