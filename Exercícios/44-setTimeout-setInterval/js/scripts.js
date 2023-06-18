// setTimeout

console.log("antes do setTimeout");

//função que é passada de um argumento para outro é considerado callback
setTimeout(function(){
    console.log("Testando o setTimeout");

}, 2000);

console.log("depois do setTimeout"); // vai ser executado antes, pois o setTimeout aguarda 2 segundos


// setInterval

setInterval(function(){
    console.log("testando o setInterval");
}, 2000) // vai rodar infinito