window.onload = function(){

    console.log("carregou o DOM");  // esse evento só acontece quando todo o dom é caregado

    var title2 = document.querySelector("#title");
    console.log(title2);
    // aqui carrega, pois está dentro do evento e aguarda o carregamento do DOM
}

console.log("carregou o JS"); // carrega primeiro porque não espera o DOM carregar

var title = document.querySelector("#title"); //vai apresentar null, porque carrega antes do DOM e o dado ainda não existe
console.log(title);