// length

var arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// push adiciona algo no fim do array
arr.push(6);
arr.push('outra coisa');

console.log(arr);


// pop remove algo no fim do array
arr.pop();

console.log(arr);


//unshift adiciona no inicio do array
arr.unshift(0);
arr.unshift('teste');
 console.log(arr);

 
 // shift remove do inicio do array
 arr.shift();

 console.log(arr);


 //acessar o ultimo elemento
 console.log(arr[arr.length - 1]);


 // isArray verificar se é ou não um array

console.log(Array.isArray(5)); //false
console.log(Array.isArray(arr)); //true



