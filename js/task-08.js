const loginFormEl = document.querySelector(".login-form");

const loginEl = {
    email: "",
    password: "",
}

loginFormEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const {
    elements: {email, password}
} = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return console.log("Alert! Please input email and password.");
  }

    loginEl.email = email.value;
    loginEl.password = password.value;
    
    console.log(loginEl);

event.currentTarget.reset();

}


// const submitButton = document.querySelector("button");

// const emailInput = document.querySelector('input[type="email"]');

// const passwordInput = document.querySelector('input[type="password"]');

// const loginEl = {
//     email: "",
//     password: "",
// }

// submitButton.addEventListener('click', () =>
// {
//     event.preventDefault();

//     if (emailInput.value === "" || passwordInput.value === "") {
//         console.log("Alert! Please, input valid email and password.")
//     } else {
//         loginEl.email = emailInput.value;
//         loginEl.password = passwordInput.value;
//         console.log(loginEl);
//         emailInput.value = "";
//         passwordInput.value = "";
//     }
// })



