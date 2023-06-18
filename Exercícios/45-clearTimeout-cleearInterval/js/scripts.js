// cleartimeout

var x = 0

var myTimer = setTimeout(function(){
    console.log("O x é 0");
}, 1500);

x = 5 // vai ser processado primeiro, antes do 1,5s. resultado vai ser o if

if(x > 0) {
    clearTimeout(myTimer);
    console.log("O x passou de 0");
};

// clearInterval
var myInterval = setInterval(function(){
    console.log("Imprimindo interval");
}, 500);

setTimeout(function(){
    console.log("Não precisamos mais repetir");
    clearInterval(myInterval);
}, 1500);

