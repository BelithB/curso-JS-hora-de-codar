var teste = 5;

console.log(this);
console.log(this.teste);
console.log(teste)


let pessoa = {
    nome: "Delith",
    idade: 29,
    dizerNome: function(){
        console.log("O meu nome é " + this.nome);
    },
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function() {
        return 'Sra. ' + this.nome;
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);


console.log(pessoa.saudacao()); //ou

var sdc = pessoa.saudacao();
console.log("Olá " + sdc);
