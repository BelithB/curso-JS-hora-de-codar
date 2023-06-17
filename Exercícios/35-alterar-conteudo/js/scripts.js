// selecionar elemento
var title = document.querySelector('#title'); // usar # para acessar ids

// innerHTML
title.innerHTML = "Testando o texto alterado";

// textContent -> mais utilizado, recomendado e performático

var subtitle = document.querySelector(".subtitle"); //usar ponto para acessar classe
console.log(subtitle); 
subtitle.textContent = "testando o textContent";