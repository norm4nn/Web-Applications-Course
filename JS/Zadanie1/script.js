


function getName() {
    // document.getElementById("demo").textContent = "Witam Pan" + prefix + " : " + message;
    let message = prompt("Podaj imię: ", "");
    if (message != null) {
        let prefix = "a";

        if (message.charAt(message.length - 1) == "a")
            prefix = "ią"
        document.getElementById("demo").textContent = "Witam Pan" + prefix + " : " + message;
    }
}

document.getElementById("button1").onclick = getName;