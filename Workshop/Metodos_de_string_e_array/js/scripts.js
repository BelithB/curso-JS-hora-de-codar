// metodos de string

const fullName = "Delith Bernardo"
console.log(fullName.length)

const stringToArray = fullName.split (' ') // vai separar o texto em lista
console.log(stringToArray)

console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())

console.log(fullName.indexOf("Bernardo"))

console.log(fullName.slice(0, 6))

// metodos de array
const list = ["a", "b", "c", "d", "e"]
console.log(list.length)
console.log(list[2]) //selecionar o item da poisção

list[5] = "f" // adicionar um item na posição
console.log(list)

console.log(list[list.length - 1]) // identificar o ultimo item da lista

list.push("g") // adicionar elemento ao final da lista
console.log(list)

list.pop() // remover o ultimo elemento
console.log(list)

list.shift() // remover o primeiro elemento da lista
console.log(list)

list.unshift("a") // adicionar no inicio da lista
console.log(list)

