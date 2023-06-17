// selecionar e adicionar atributo de classe

var title = document.querySelector("#title");
title.setAttribute("class", "testando-atributo"); // atributo tipo classe e nome do atributo
console.log(title);


// selecionar botão e alterar status para desabilitado
var btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");


// adicionar id no subtitulo que tem classe

var subtitle = document.querySelector(".subtitle");
subtitle.setAttribute("id", "titulo-2");


// remover atributo
var lista = document.querySelector("#lista");

lista.removeAttribute("id");
