// toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";
var fraseCaixaAlta = frase.toUpperCase();

console.log(frase.toLowerCase());
console.log(fraseCaixaAlta);
console.log(fraseCaixaAlta.toLowerCase());


// trim - apaga os espaços extras em um dado simples. nome composto não funciona.

var nome = "        Delit        ";
var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);


// split separa os elementos e coloca em lista 
console.log(frase.split(" "));

var listagem = "ovos, pão, café, arroz, frango, chocolate";
console.log(listagem.split(", "));


//lastIndexOf

var fraseDois = "Eu quero a última palavra teste deste teste";

console.log(fraseDois.indexOf("teste")); // irá encontrar o primeiro teste
console.log(fraseDois.lastIndexOf("teste")); 