const listEl = document.querySelectorAll('.item');
console.log('Number of categories:', listEl.length);
listEl.forEach(item => {
    const nameEl = item.querySelector("h2").textContent;
    console.log("Category:", nameEl);
    const numbersEl = item.querySelectorAll("li");
    console.log("Elements", numbersEl.length);
})