
const psswdInput = document.getElementById("psswd");
const repeatInput = document.getElementById("repeat");
const visiblityBtn1 = document.getElementById("visibility1");
const visiblityBtn2 = document.getElementById("visibility2");
const messageEl = document.getElementById("error-message");

const deactiveColor = "rgb(165, 165, 165)";
const activeColor = "#519EA2";

function validation() {
    const input = psswdInput.value;

    if (input.length >= 8) {
        document.querySelector("ul > li:nth-child(1) > span").setAttribute("style", "background-color: " + activeColor + ";");
        document.querySelector("ul > li:nth-child(1) > span").textContent = "done";
    }
    else  {
        document.querySelector("ul > li:nth-child(1) > span").setAttribute("style", "background-color: " + deactiveColor + ";");
        document.querySelector("ul > li:nth-child(1) > span").textContent = "close";
    }

    if (input.match(/[^a-zA-Z0-9]/)) {
        document.querySelector("ul > li:nth-child(2) > span").setAttribute("style", "background-color: " + activeColor + ";");
        document.querySelector("ul > li:nth-child(2) > span").textContent = "done";
    }
    else {
        document.querySelector("ul > li:nth-child(2) > span").setAttribute("style", "background-color: " + deactiveColor + ";");
        document.querySelector("ul > li:nth-child(2) > span").textContent = "close";
    }

    if (input.match(/[A-Z]/))   {
        document.querySelector("ul > li:nth-child(3) > span").setAttribute("style", "background-color: " + activeColor + ";");
        document.querySelector("ul > li:nth-child(3) > span").textContent = "done";
    }
    else {
        document.querySelector("ul > li:nth-child(3) > span").setAttribute("style", "background-color: " + deactiveColor + ";");
        document.querySelector("ul > li:nth-child(3) > span").textContent = "close";
    }
    
    if (input.match(/[0-9]/))   {
        document.querySelector("ul > li:nth-child(4) > span").setAttribute("style", "background-color: " + activeColor + ";");
        document.querySelector("ul > li:nth-child(4) > span").textContent = "done";
    }
    else    {
        document.querySelector("ul > li:nth-child(4) > span").setAttribute("style", "background-color: " + deactiveColor + ";");
        document.querySelector("ul > li:nth-child(4) > span").textContent = "close";
    }
}


function changeVisibility() {
    const parentEl = this.parentElement;
    const inputEl = parentEl.firstElementChild;
    if (inputEl.type === "password") {
        inputEl.type = "text";
        this.textContent = "visibility";
    }
    else {
        inputEl.type = "password";
        this.textContent = "visibility_off";
    }
    
}

function samePsswdValidation() {
    const correct = psswdInput.value;
    const current = repeatInput.value;
    
    if (current !== correct && current.length > 0)
        messageEl.textContent = "Hasła nie są takie same!"
    else 
        messageEl.textContent = ""


}




psswdInput.addEventListener("keyup", validation);
repeatInput.addEventListener("keyup", samePsswdValidation);
psswdInput.addEventListener("keyup", samePsswdValidation);
visiblityBtn1.addEventListener("click", changeVisibility);
visiblityBtn2.addEventListener("click", changeVisibility);
