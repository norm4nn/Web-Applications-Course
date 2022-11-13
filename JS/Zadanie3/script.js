

function add() {
    const list = document.getElementById("ulist");
    let new_li = document.createElement('li');
    new_li.textContent = "element nr " + (list.childElementCount + 1);
    list.appendChild(new_li);
}

function del() {
    const list = document.getElementById("ulist");
    list.removeChild(list.children[0]);
}

document.getElementById("add").onclick = add;
document.getElementById("delete").onclick = del;