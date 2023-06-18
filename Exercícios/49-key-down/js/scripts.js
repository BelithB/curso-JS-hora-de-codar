// keydown

document.addEventListener("keydown", function(event){

   // console.log(event.key); mapear qual tecla está sendo ativada

    if(event.key === "Enter"){
        console.log("apertou Enter");
    }
});


//keyup é mais interessante usar o keyup pois ele não realiza repetições. Enquanto a tecla enter estiver acionada, o "keydown"irá funcionar
document.addEventListener("keyup", function(e){

    if(e.key === "Enter"){
        console.log("soltou a tecla");
    }
});
