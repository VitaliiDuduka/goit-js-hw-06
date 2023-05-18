const textInput = document.querySelector("#validation-input");

textInput.addEventListener('blur', onInputBlur);

function onInputBlur() {

    if (+textInput.getAttribute('data-length') === event.currentTarget.value.length) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
}