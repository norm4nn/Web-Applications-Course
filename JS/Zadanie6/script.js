let formData = new FormData(document.querySelector("form"))

function isValid() {
    return document.getElementById("name").checkValidity() && document.getElementById("phone").checkValidity();
}


document.getElementById("add").onclick = function() {

    let formData = new FormData(document.querySelector('form'));
    
    if(!isValid())
        return;

    let name = formData.get("name");
    let phone = formData.get("phone");

    let section = document.createElement('section');

    let section_left = document.createElement('div');
    section_left.classList.add('section-left');

    let section_left_h3 = document.createElement('h3');
    section_left_h3.textContent = name;
    let section_left_p = document.createElement('p');
    section_left_p.textContent = phone;

    section_left.appendChild(section_left_h3);
    section_left.appendChild(section_left_p);
    section.appendChild(section_left);

    let section_right = document.createElement('div');
    section_right.classList.add("class-right");
    section_right.textContent = "🗑";
    section_right.addEventListener('click', deleteEntry);
    section.appendChild(section_right);

    document.getElementById("entries").appendChild(section);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}

function deleteEntry() {
    let parent = document.getElementById("entries");
    let index = Array.from(parent.children).indexOf(this.parentNode);
    parent.removeChild(parent.children[index]);
}