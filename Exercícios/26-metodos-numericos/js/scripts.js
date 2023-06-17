/* parseFloat 10.0
recebe string e retorna numero de ponto flutuante
*/

console.log(parseFloat('12.123'));
console.log(Number.parseFloat('12.999'));

/* parseInt
transforma sting em numero e arredonda o número
*/
console.log(parseInt('10'));
console.log(parseInt(12.18));
console.log(parseInt('16.33'));


/* toFixed
arredonda para com o numero de casa decimal informada 
*/

console.log(23.48738374.toFixed(2));


/* isNaN
is not a number, retorna true se o elemento não for um número
*/

console.log(isNaN("teste")); //true
console.log(isNaN(12)); //false
console.log(isNaN("14")); //converte sting para numero e retorna false


/* MAX_VALUE e MIN_VALUE
maximos e minimos aceitados pelo js para não dar problema ou infinito
*/

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);