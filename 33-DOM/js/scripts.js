/* DOM - Document Object Model 
um objeto que é possivel acesssar e manipular o html atravez de metodos
é o meio de acessar o HTML
pode ser acessado por tags, ids, classes;
é uma COPIA fiel do HTML
*/

// acesso por tag pode ter diversos itens com a mesma tag, precisa especificar qual por []
var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

var lista = document.getElementsByTagName('li');
console.log(lista[3]);  
console.log(lista) // vai trazer todas as listas no html


// acesso por id a id é unica
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);


// acesso por classe, espera varios elementos
var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista); // vai trazer apenas a lista que contem classe declarada