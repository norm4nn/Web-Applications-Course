const targetContainerEl = document.querySelector('#target-container');
const boardEl = document.querySelector('.board');
const scoreEl = document.querySelector('.high-score');
const msgEl = document.querySelector('#message');
const zombies = [];
let score = 0;
let lifes = 3; 

function score2string(){
    result = score + "";
    if (score > 99999)
        result = "99999";
    while(result.length < 5) 
        result = "0" + result;
    
    return result;
}

function destroy(e){
    if (e.target.matches('.zombie')) {
        score += 12;
        e.target.remove();
    }
    else {
        score -= 6;
        if (score < 0)
            score = 0;    
    }

    scoreEl.textContent = score2string();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setStyles(styles, element){
    Object.assign(element.style, styles);
}

function Zombie() {
    this.positionX = 0;
    this.scale = (getRandomInt(14)+10)/10;
    this.speed = getRandomInt(9000) + 1000;
    this.bottom = getRandomInt(400) - 200;
    this.zombieEl = document.createElement('div');
    this.zombieEl.classList.add("zombie");
    boardEl.appendChild(this.zombieEl);


    const zombieMove = [
        {   left: '110%',
            scale: this.scale,
            bottom: this.bottom },
        {   left: '-300px',
            scale: this.scale,
            bottom: this.bottom }
      ];
    const animationTiming = {
        duration: this.speed,
        iterations: 1,
        fill: 'both',
    }
      
    this.zombieEl.animate(zombieMove,animationTiming);    
}

function animatingFrames(zombieObj) {
    if (zombieObj.positionX === 0)
        zombieObj.positionX = 1800;
    else
        zombieObj.positionX -= 200;
    zombieObj.zombieEl.setAttribute("style","background-position-x: " + zombieObj.positionX  +"px;");
}

function onMouseMove(e){
    targetContainerEl.setAttribute("style", "left:" +(-targetContainerEl.offsetWidth/2 +  e.pageX) + 'px;' +
                                    'top: ' +(-targetContainerEl.offsetHeight/2 + e.pageY) + 'px');
}

function spawn() {
    const newZombie = new Zombie();
    zombies.push(newZombie);
    setInterval(function() { animatingFrames(newZombie) },100);
}

function run() {
    setTimeout(spawn, getRandomInt(3000));    
}

function check() {
    toDelete = zombies.find(element => {
        const style = getComputedStyle(element.zombieEl);
        return style.left === '-300px';
    });
    if (toDelete) {
        toDelete.zombieEl.remove()
        lifes -= 1;
        if (lifes === 0){
            clearInterval(runInterval);
            endScreen();
            document.removeEventListener('click', destroy);
        }
    }
}

function endScreen() {
    const slide = [
        {
            top: '-100vh' 
        },
        {   
            top: 0
        }
      ];
    const animationTiming = {
        duration: 1000,
        iterations: 1,
        fill: 'both',
    }
      
    msgEl.animate(slide,animationTiming); 
}

let runInterval = setInterval(run, 1000);
let checkInterval = setInterval(check, 30);
boardEl.addEventListener("mousemove", onMouseMove,true);
document.addEventListener('click', destroy);

