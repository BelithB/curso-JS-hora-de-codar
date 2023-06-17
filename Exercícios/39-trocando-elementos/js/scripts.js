// criar um elemento
var elem = document.createElement("h3"); //criando elemento
elem.classList = "testando-classe"; // adicionando classe

var texto = document.createTextNode("Este é o texto do h3"); // criando texto que vai para o elemento
elem.appendChild(texto); // adicionando o texto ao elemento

console.log(elem);

//selecionar elemento que quero trocar
 var title = document.querySelector("#title");
 console.log(title);

 // selecionar o pai do elemento sem saber qual é o pai
 var pai = title.parentNode;

 // trocar os elementos - declara o que vai entrar novo e qual vai sair
pai.replaceChild(elem, title);