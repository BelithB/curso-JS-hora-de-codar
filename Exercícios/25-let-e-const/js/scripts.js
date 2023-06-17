let x = 5; // var x = 5

x = 12;

//não é possível mudar o valor da constante no codigo
const y = 10;

console.log(x);

// é possível alterar o valor de x e y dentro de blocos sem mexer no global
if(true){
    let x = 20;
    console.log(x);

    const y = 50;
    console.log(y);

}

console.log(x);
console.log(y);

for(let x = 0; x < 10; x++){
    console.log(x);
}