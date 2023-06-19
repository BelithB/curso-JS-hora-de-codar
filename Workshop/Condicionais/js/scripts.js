// estruturas condicionais
const a = 10

if(a > 8){
    console.log('A é maior do que 8')
}

// >, <, >=, <=
const b = "Delit"

// quando se usa == estamos validando se o valor é igual, quando usamos === verificamos valor e tipo de dado
if(b === "João") {
    console.log('O nome é João')
} else if (b === 'Pedro'){
    coonsole.log('O nome é Pedro')
} else {
    console.log('Não encontramos o nome do usuário')
}

// if ternário

 const someNumber = 14

 let testingANumber = someNumber < 20 ? 'Yes' : 'No'
 console.log(testingANumber)


 // estruturas de repetição - loop

 const myList = [1, 2, 3, 4, 5]
 let counter = 0

 while(counter < myList.length) {
    console.log('imprimindo:' + myList[counter]) //usar o counter para imprimir um por vez
    counter++
 }

const mySecondList = ['a', 'b', 'c', 'd', 'e']

for(let counter = 0; counter < mySecondList.length; counter++){
    console.log(`ïmprimindo: ${mySecondList[counter]}`) //metodo de concatenação - template literals
}

// repetição em metodos de array
const names = ["Delit", "Belith", "Bilit", "Belit"]

names.forEach(function(name){
    console.log(`O nome é: ${name}`)
})

//metodo map
const modifieNames = names.map(function(name){
    if (name === "Delit") {
        return (name = "Sra. Delit")
    } else {
        return name
    }
})

console.log(modifieNames)

//metodo filter
const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter(function(number){
    return number >= 5
})

console.log(bigNumbers)

//metodo reduce
const sumAll = [10, 20, 30, 40, 50].reduce(function(total, number){
    return total + number
})

console.log(sumAll)