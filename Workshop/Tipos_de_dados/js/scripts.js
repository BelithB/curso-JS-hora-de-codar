//console
console.error('este é um erro');
console.warn('este é um aviso');
console.log('esta é uma mensagem');

//variáveis
var x = 15
// mais modernas
let y = 20 
const z = 25

if (1) {
    let y = 55
    console.log(y);
}

console.log(x);
console.log(y);
console.log(z);

y = 30 // posso alterar o valor de let fora de um bloco, não posso alterar o const

console.log(y);

// tipos de dados
const name = "Delit"
console.log(name)
console.log(typeof name)

const shirtsQty = 4
console.log(shirtsQty)
console.log(typeof shirtsQty)

const decimal = 12.4 // numero é numero indeoendente do ponto
console.log(decimal)
console.log(typeof decimal)

const isApproved = false // boolean aceita verdadeiro ou falso
console.log(isApproved)
console.log(typeof isApproved)

let surname = null //declara sem valor para dizer que no decorrer do codigo queremos declarar um valor a ele
console.log(surname)
console.log(typeof surname)

surname = "Bernardo"
console.log(surname)
console.log(typeof surname)

let age
console.log(age) //undefined, sem valor definido. Mais correto é usar o null
console.log(typeof age)

age = 30
console.log(age)
console.log(typeof age)

const lenguages = ["JavaScript", "PHP", "Python", "5"]
console.log(lenguages)
console.log(typeof lenguages)

//object literals
const user = {
   email: "delith@teste.com",
   password: "teste123",
   age: 30 
}
console.log(user)
console.log(typeof user)


// metodos de string
const fullName = "Delith Bernard";
console.log(fullName.length)
