var idade = 16;
var nome = "João";

if(nome == "João" && idade == 16){
    console.log("O joão pode entrar na aula");
} else {
    console.log ("Este não é o joão");
}

// can have as many expressions is necessary
if (1 == 1 && 3 > 2 && true) {
    console.log("passou");
}

// isolate who is gonna be processed first
if ((1 == 1 && 3 > 2) && true) {
    console.log("passou");
}

// false result, it will not be show
if ((1 == 1 && 3 > 3) && true) {
    console.log("passou");
}


if ((1 == 1 && 3 > 3) && true) {
    console.log("passou");
} else if(nome === "João" && idade >= 14) {
    console.log("aqui passa");
}