// inserir elemento no body
var novoParagrafo = document.createElement("p"); //cria novo paragrafo
var texto = document.createTextNode("Este é o conteúdo do parágrafo"); //cria o que vai inserir

novoParagrafo.appendChild(texto); // comando para inserir elemento

console.log(novoParagrafo); //chama ação no console

var body = document.querySelector("body"); //mapeia o body, onde vai inserir
console.log(body);

body.appendChild(novoParagrafo); //inserir no body


// inserir em um container

var container = document.querySelector('#container'); //mapear o local onde inserir
console.log(container);

var novoElemento = document.createElement("span"); // criar elemento a ser inserido
novoElemento.appendChild(document.createTextNode("texto do span"));
console.log(novoElemento);

container.appendChild(novoElemento); //inserir elemento