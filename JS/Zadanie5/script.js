let sum = 0;
const msgEl = document.getElementById("message");
const yellowEl = document.getElementById("third");
const redEl = document.getElementById("second");
const blueEl = document.getElementById("first");
const resetEl = document.getElementById("reset");
const reverseEl = document.getElementById("reverse");
const propagationEl = document.getElementById("propagation")
let propagationOn = false;
let capture = false;


function redOff() {
    redEl.removeEventListener("click", red, capture);
    redEl.setAttribute("style", "background-color: gray;")
}

function yellowOff() {
    yellowEl.removeEventListener("click", yellow, capture);
    yellowEl.setAttribute("style", "background-color: gray;")
}

function redOn() {
    redEl.addEventListener("click", red, capture);
    redEl.setAttribute("style", "background-color: red;")
}

function yellowOn() {
    yellowEl.addEventListener("click", yellow, capture);
    yellowEl.setAttribute("style", "background-color: yellow;")
}

function changePropagationDirection() {
    redEl.removeEventListener("click", checkPropagation, capture);
    yellowEl.removeEventListener("click", checkPropagation, capture);
    blueEl.removeEventListener("click", checkPropagation, capture);
    redEl.addEventListener("click", checkPropagation, !capture);
    yellowEl.addEventListener("click", checkPropagation, !capture);
    blueEl.addEventListener("click", checkPropagation, !capture);
    
}

function checkSum() {
    if (sum > 30)
        redOff();
    if (sum > 50)
        yellowOff();
}

function blue(e) {
    sum += 1;
    msgEl.textContent = "Kliknięto niebieski, o wartości +1, suma: " + sum;

    checkSum();
}

function red(e) {
    sum += 2;
    msgEl.textContent = "Kliknięto czerwony, o wartości +2, suma: " + sum;

    checkSum();
}

function yellow(e) { 
    sum += 5;
    msgEl.textContent = "Kliknięto żółty, o wartości +5, suma: " + sum;

    checkSum();
}

function checkPropagation(e) {
    if (!(propagationOn))
        e.stopPropagation();
}

function changePropagation() {
    propagationOn = !propagationOn;
    if (propagationOn) 
        propagationEl.textContent = "StopPropagation";
    else
        propagationEl.textContent = "StartPropagation"
}

function reset() {
    sum = 0;
    msgEl.textContent = "suma: " + sum;
    redOn();
    yellowOn();
    if (capture)
        reverse();
    if (propagationOn)
        changePropagation();
}

function reverse() {
    redOff();
    yellowOff();
    blueEl.removeEventListener("click", blue, capture);
    changePropagationDirection();
    capture = !capture;
    redOn();
    yellowOn();
    blueEl.addEventListener("click", blue, capture);
    checkSum();

    if (capture)
        reverseEl.textContent = "isCapturing";
    else
        reverseEl.textContent = "isBubbling";
}



yellowEl.addEventListener("click", checkPropagation);
redEl.addEventListener("click", checkPropagation);
blueEl.addEventListener("click", checkPropagation);

yellowEl.addEventListener("click", yellow);
redEl.addEventListener("click", red);
blueEl.addEventListener("click", blue);


resetEl.onclick = reset;
propagationEl.onclick = changePropagation;
reverseEl.onclick = reverse;