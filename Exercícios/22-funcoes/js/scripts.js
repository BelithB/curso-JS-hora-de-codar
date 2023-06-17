function primeiraFuncao(){
    console.log("Primeira função do curso");

}

primeiraFuncao();

function qualNome(nome) {
    console.log("o nome é:" + nome);
    
}

qualNome("Delith");
qualNome("Pedro");

var nomeDoBancoDeDados = "João";

qualNome(nomeDoBancoDeDados);


function soma(a, b){
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);
console.log(somaUm);

var somaDois = soma(5,5);
console.log(somaDois)

//posso realizar a operação sem delcarar a variavel, ela fica dentro da operação
console.log(soma(4,5));