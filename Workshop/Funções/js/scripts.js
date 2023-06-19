function minhaFuncao() {
    console.log("exemplo de função")
}

minhaFuncao()

function nomeCompleto(nome, sobrenome){
    return `O nome completo é: ${nome} ${sobrenome}`
}
console.log(nomeCompleto("Delit", "Santos"))
console.log(nomeCompleto("Mario", "João"))

const firstName = "Belith"
const lastName = "Bernardo"

const myFullName = nomeCompleto(firstName, lastName)

console.log(myFullName)


// arrow function
const myArrowFunction = (a, b) => {
    return a + b
}

console.log(myArrowFunction(2, 5))

const sumAll = [10, 20, 30, 40, 50].reduce((total, number) => {
    return total + number
})

console.log(sumAll)

const mySimpleArrowFunction = (a, b) => a + b
console.log(mySimpleArrowFunction(5, 5))