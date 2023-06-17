// criar elemento
var elementoNovo = document.createElement("div");
elementoNovo.classList = "div-criada"; // criar como classe
console.log(elementoNovo);

var container = document.querySelector("#container"); // selecionar onde quero colocar
container.appendChild(elementoNovo); // inserindo o elemento filho


// insertBefor - insere antes do elemento já existente

var outroElemento = document.createElement("div");
outroElemento.classList = "div-before";

var elementoExistente = document.querySelector("#container .div-before")
console.log(elementoExistente);

container.insertBefore(outroElemento, elementoExistente);