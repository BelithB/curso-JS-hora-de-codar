// Hoisting - faz o içamento e considera undefined
console.log(sobrenome);


var nome = null;
var sobrenome; //undefined, criada e sem valor


console.log(nome);
console.log(sobrenome); 

nome = "belith";

console.log(nome);