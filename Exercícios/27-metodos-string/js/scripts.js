// length vai dar tamanho do nome, quantas letras, serve para outras contas

var nome = "delit";
console.log(nome.length);

var lista = [1, 2, 3, 4, 5, 6]
console.log(lista.length); 


//indexOf conta onde está localizado o item solicitado

console.log(nome[2]);

var frase = "O rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("roeu"));

//slice extrai elemento que está em uma frase, informando o local que aparece em index

var retira = frase.slice(7, 11)
console.log(retira);

// replace - troca uma palavra por outra

var novaFrase = frase.replace("roeu", "teste");
console.log(novaFrase);