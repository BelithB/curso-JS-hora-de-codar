var idade = 18
var possuiCarro = 0 // 0 equal false

if (idade >= 18){
    console.log("O usuário pode fazer carteira");
}

if(idade <= 17){
    console.log("usuário não pode fazer carteira");
}

if(possuiCarro){
    console.log("O usurário já pode andar de carro");
}

var nome = "Belith";

//se não utilizar o ==, o js irá substituir a atribuicao
if(nome == "Belith"){
    console.log("O seu nome é Belith");
}

if(nome != "Delit"){
    console.log ("O nome não é Delit");
}

if(20 > 10){
    console.log("Passou");
}

// result is false thats not going to pass becouse 100 isn't less than 20
if(100 < 20) {
    console.log("Passou 2");
}