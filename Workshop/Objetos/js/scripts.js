//objetos
const product = {
    name: "camisa",
    price: 15.99,
    inStock: true,
    sizes: ["P", "M", "G"],
    "Main color": "Azul",
}

console.log(product.name) // acessar pelo item
console.log(product["name"])
console.log(product["Main color"]) //outras formas menos utilizadas

// destructuring
const { price, inStock} = product
console.log(price)
console.log(inStock)    

/* esse recurso substitui a ação. Evitando escrever tantas linhas caso existam mais propriedades nos objetos

const price = product.price
const inStock = product.inStock
*/

const list = ["a", "b", "c", "d", "e"]
const [n1, n2] = list

console.log(n1)
console.log(n2)

 //JASON - JavaScript Object Notation
const dog = {
    name: 'shark',
    age: 10,
}
// transformat em json
const json = JSON.stringify(dog)
console.log(json)

const obj = JSON.parse(json)
console.log(obj)

/* const jsonErrado = '{"name": "Teste", "surname": "Testando",}' //apresenta erro pois não pode terminar em virgula
const obj2 = JSON.parse(jsonErrado)
console.log(obj2)
*/ 

