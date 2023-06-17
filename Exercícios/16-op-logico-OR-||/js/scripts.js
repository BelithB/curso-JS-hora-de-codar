// só apresenta falso se todas as operações derem false

var idade = 16;
var nome = "João";

if(nome == "João" || idade > 14){ 
    console.log("Pode entrar na aula");
}

if(nome == "Pedro" || idade > 15) {
    console.log("Pode entrar na aula");
} else {
    console.log ("Não pode entrar");
}

// condição passa pois todas as informações são true
if(nome = "João" && 15 > 20 || 10 == 10){ 
    console.log("testando");
}

// condição passa, pois mesmo que o && seja falso, a segunda condição OR é true 
if(nome = "Pedro" && 15 < 20 || 10 == 10){ 
    console.log("testando");
}

// não passa, pois a condição precisa ser && e OR deu false
if((nome = "Pedro" || 15 > 20) && 10 == 10){ 
    console.log("testando");
} else {
    console.log("Não entra");
}

//operação passa, pois OR foi true na segunda condição. true + true = true
if((nome = "Pedro" || 30 > 20) && 10 == 10){ 
    console.log("testando");
} else {
    console.log("Não entra");
}

// vai passar pois selecionamos quem processa primeiro, e mesmo PEdro sendo false, a segunda condição OR é true
if(nome = "Pedro" || (30 > 20 && 10 == 10)){ 
    console.log("testando");
} else {
    console.log("Não entra");
}

//não passa pois as duas condições precisam ser true
if(nome = "Pedro" && (30 > 20 || 10 == 10)){ 
    console.log("testando");
} else {
    console.log("Não entra");
}
