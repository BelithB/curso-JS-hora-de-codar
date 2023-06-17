var obj = {
    nome: "belith",
    idade: 29,
    profissao: "tester",
    estaTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);

// para chamar o objeto individualmente
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);


console.log("o meu nome é" + obj.nome) 

// mudar o valor da propriedade

obj.nome = "joana";
console.log(obj.nome);
console.log(obj);

// adicionar novo item no objeto

obj.graduacao = true;
console.log(obj);
