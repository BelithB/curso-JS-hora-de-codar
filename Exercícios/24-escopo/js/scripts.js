// variaveis globais
var x = 1;
var y = 3;

console.log(x, y);

// variaveis dentro da função só funcionam para a função
function teste(){
    var z = 0;
    
    console.log(z);

}

teste();

// z pode ter qualquer valor desde que esteja em uma função, não afeta o que está fora
function testando() {
    var z = 5;

    console.log(z);

}

testando()

// o if não limita o escopo, pode ser chamado fora, ele fica como global
if (true) {

    var p = 1;
}

console.log(p);

