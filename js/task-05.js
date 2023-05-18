const targetInput = document.querySelector("#name-input");

targetInput.addEventListener('click', () => {
    console.log("Input click");
})

const output = document.querySelector("#name-output");

targetInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        output.textContent = "Anonymous";
   }    else {output.textContent = event.currentTarget.value;}
    
});
  
