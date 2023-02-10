let names = [
  "Snakes and Ladders",
  "Ludo",
  "Rock Paper Scissors",
  "Tic Tac Toe",
];
let colour = [
  "btn-primary",
  "btn-secondary",
  "btn-success",
  "btn-danger",
  "btn-warning",
  "btn-info",
  "btn-light",
  "btn-dark",
  "btn-link",
];

document
  .querySelector(".navbar-brand")
  .addEventListener("mouseenter", function () {
    let num = Math.floor(Math.random() * names.length);
    this.innerHTML = String(names[num]);
  });

document
  .querySelector(".navbar-brand")
  .addEventListener("mouseleave", function () {
    this.innerHTML = "THE GAME";
  });

for (
  let i = 0;
  i < document.querySelectorAll("button.btn.btn-secondary").length;
  i++
) {
  document
    .querySelectorAll("button.btn.btn-secondary")
    [i].addEventListener("mouseover", function () {
      this.innerHTML = String(Number(this.innerHTML) + 1);
      // let number = Math.floor(Math.random()*colour.length);

      // this.classList.add(colour[number]);
    });
}
for (
  let i = 0;
  i < document.querySelectorAll("button.btn.btn-secondary").length;
  i++
) {
  document
    .querySelectorAll("button.btn.btn-secondary")
    [i].addEventListener("click", function () {
      this.innerHTML = String(Number(this.innerHTML) - 1);
      // let number = Math.floor(Math.random()*colour.length);

      // this.classList.add(colour[number]);
    });
}

// $("a.btn").click(function(){
//     $("a.btn.btn-dark").text("hello");
// });

// $("button.btn.btn-secondary").click(function(){
//     $("button.btn.btn-secondary").html(String(Number($("button.btn.btn-secondary").html())+1));
// });
