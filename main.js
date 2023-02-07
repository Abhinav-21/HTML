let names = ["Snakes and Ladders", "Ludo", "Rock Paper Scissors", "Tic Tac Toe"];

document.querySelector(".navbar-brand").addEventListener("mouseenter",function(){
    let num = Math.floor(Math.random()*names.length);
    this.innerHTML = String(names[num]);
});

document.querySelector(".navbar-brand").addEventListener("mouseleave",function(){
    this.innerHTML = "THE GAME";
});

for (let i = 0; i < document.querySelectorAll("button.btn.btn-secondary").length; i++) {
    document.querySelectorAll("button.btn.btn-secondary")[i].addEventListener("click", function(){
    this.innerHTML=String(Number(this.innerHTML)+1);
});
}