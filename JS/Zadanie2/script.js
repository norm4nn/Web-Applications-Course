let counter = 0;

document.getElementById("btn1").onclick = function() {
    counter += 1;
    counter %= 3;
    const image = document.getElementById("main-img");
    image.classList = "";
    image.classList.add("_"+(counter+1));
    image.src = (counter + 1) + ".jpg";
    
}
