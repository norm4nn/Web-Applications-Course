let counter = 0;

function increment() {
    const counterEl = document.getElementById("counter");
    if (counterEl.classList.contains("disabled"))
        return;
    counter++;
    counterEl.textContent = "Licznik " + counter;
}

function disableCounter() {
    document.getElementById("counter").classList.add("disabled");
    counter = 0;

    const counterEl = document.getElementById("counter");
    counterEl.textContent = "Licznik " + counter;
}

function enableCounter() {
    const counterEl = document.getElementById("counter");
    if (!counterEl.classList.contains("disabled"))
        return;
    document.getElementById("counter").classList.remove("disabled");
    counterEl.textContent = "Licznik " + counter;
}

document.getElementById("add").onclick = increment;
document.getElementById("disable").onclick = disableCounter;
document.getElementById("enable").onclick = enableCounter;