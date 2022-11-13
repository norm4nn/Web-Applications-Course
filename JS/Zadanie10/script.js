
const circleEl = document.getElementById("circle");
const boundariesEl = document.getElementById("boundaries");
const containerEl = document.getElementById("container");
const msgEl = document.getElementById("msg");

function move(e){
    circleEl.setAttribute("style", "left:" +(-circleEl.offsetWidth/2 +  e.offsetX) + 'px;' +
                                    'top: ' +(-circleEl.offsetHeight/2 + e.offsetY) + 'px');
    msgEl.innerText = "Naciśnij gdziekolwiek";
    e.stopPropagation();
}

const outOfScope = (e) => {
    msgEl.innerHTML = 'Ale nie tam!';

}




boundariesEl.addEventListener("click", move,true);
containerEl.addEventListener("click", outOfScope);
