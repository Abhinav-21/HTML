document.querySelector(".navbar-brand").addEventListener("mouseenter", change);

function change(){
    this.innerHTML = "Snakes and Ladders";
}

document.querySelector(".navbar-brand").addEventListener("mouseleave", change2);

function change2(){
    this.innerHTML = "THE GAME";
}