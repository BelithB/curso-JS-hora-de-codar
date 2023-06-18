// inserir click

var btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", function() {
    console.log("clicou");
    console.log(this); //sempre que acessat um (this) dentro de um evento, está se referindo a ele.
    this.style.color = "red";
});

// click afetando outros elementos

var title = document.querySelector("#title");

title.addEventListener("click", function() {
    var subtitle = document.querySelector(".subtitle");
    subtitle.style.display = "none";

});


// double click
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dbclick", function(){
    console.log("Click duplo");
});