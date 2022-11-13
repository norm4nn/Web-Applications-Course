async function fetchWorkers() {
    const response = await fetch("http://localhost:3000/workers");
    const result = await response.json();
    return result;
}


const arrayOfElements = fetchWorkers().then(function(workers) {
    const cards = [];

    workers.forEach(function(worker) {
        const imgEl = document.createElement('img')
        imgEl.src = worker['img-link'];
        const imgContainerEl = document.createElement('div')
        imgContainerEl.classList.add("image-container");
        imgContainerEl.appendChild(imgEl);

        const nameEl = document.createElement('span');//.classList.add("name");
        nameEl.classList.add("name");
        nameEl.textContent = worker['name'];

        const roleEl = document.createElement('span');//.classList.add("role");
        roleEl.classList.add("role");
        roleEl.textContent = worker['role'];

        const descEl = document.createElement('span');
        descEl.classList.add("description");
        descEl.textContent = worker['desc'];

        const cardEl = document.createElement('div');
        cardEl.classList.add("card");
        cardEl.appendChild(imgContainerEl);
        cardEl.appendChild(nameEl);
        cardEl.appendChild(roleEl);
        cardEl.appendChild(descEl);
        document.querySelector('#slider').appendChild(cardEl);
        cards.push(cardEl);
    });
    cards[0].setAttribute("style", "opacity: 1;");
    return cards;
});


const slideManager = arrayOfElements.then((cards) => {
    let current = 0;

    function slideLeft(){
        const old = current;
        current += 1;
        current %= cards.length;
        cards[current].setAttribute("style", "animation: slideL 1s 1; animation-fill-mode: both;");

        cards[old].setAttribute("style", "animation: fade 1s 1; animation-fill-mode: both;");
    }   

    function slideRight(){
        const old = current;
        if (current === 0) 
            current = cards.length - 1;
        else
            current -= 1;

        cards[current].setAttribute("style", "animation: slideR 1s 1; animation-fill-mode: both;");
        cards[old].setAttribute("style", "animation: fade 1s 1; animation-fill-mode: both;");
    }   

    function random() {
        const old = current;
        while (old === current && cards.length > 1)
            current = Math.floor(Math.random() * (cards.length));
        cards[current].setAttribute("style", "animation: fadeIn 2s 1; animation-fill-mode: both;");
        cards[old].setAttribute("style", "animation: fade 2s 1; animation-fill-mode: forward;");

    }

    
    console.log(current);
    

    const leftEl = document.getElementById("slideLeft");
    leftEl.addEventListener("click", slideLeft);

    const rightEl = document.getElementById("slideRight");
    rightEl.addEventListener("click", slideRight);

    const randEl = document.getElementById("random");
    randEl.addEventListener("click", random);

});
