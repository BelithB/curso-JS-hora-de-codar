class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productDetails(){
        return `O nome do produto é ${this.name} e o preço é ${this.price}`
    }
}

const socks = new Product('Meia branca', 10.99)
const shirt = new Product('Camisa Preta', 22.99)

console.log(socks.name)
console.log(socks.price)
console.log(shirt.name)

console.log(shirt.productDetails())

//herança
class SuperProduct extends Product {
    constructor(name, price, size) {
        super(name, price)
        this.size = size
    }

    showAdjective(adjective) {
        return `O ${this.name} é muito ${adjective}`
    }

    // static
    static sayHello(){
        console.log("Hello")
    }

}

const tenis = new SuperProduct("All Star", 119.99, "Tam 39")

console.log(tenis.name)
console.log(tenis.size)

console.log(tenis.showAdjective("bom"))

SuperProduct.sayHello()