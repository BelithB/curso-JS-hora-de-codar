let pessoa = {
    nome: "Delith",
    idade: 29,
    falar: function(){
        console.log("Olá, tudo bem?");
    },
    soma: function(a, b){
        return a + b;
    }
}

console.log(pessoa.nome); // chamar um item do objeto

pessoa.falar(); // já foi dado o console.log na função

var soma = pessoa.soma(2, 2); //criar variavel para atribuir os valores a, b
console.log(soma);
