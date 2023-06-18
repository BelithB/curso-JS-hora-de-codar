// evento de mouseover

var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){

    this.style.backgoundcolor = "yelow";

});

// evento mouseout

title.addEventListener("mouseout", function(){

    this.style.backgoundcolor = "white";
});

// afetar outro elemento com mouseover

var subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("mouseover", function(){
    var legenda = document.querySelector("#legenda");
    legenda.classList.remove("hide");
});

var subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("mouseout", function(){
    var legenda = document.querySelector("#legenda");
    legenda.classList.add("hide");
});