// Uso do Let e do Const (Variáveis mais usadas);
// Diferença principal entre as duas: Let é uma variável que consegue mudar o valor e Const é uma variável que não consegue mudar o valor declarado.
// Quando eu for me referir a mesma variável para mudar o valor (em let) eu não preciso repetir a palavra "let" novamente;

const primeiroValor = 10;
const segundoValor = 20;

console.log("PrimeiroValor + SegundoValor: ", primeiroValor + segundoValor);

const valorTotal = 30;
console.log("Valor Total: ", valorTotal);

let terceiroValor = 50;
console.log("Terceiro Valor: ", terceiroValor);

terceiroValor = 100;
console.log("Terceiro Valor Final: ", terceiroValor);

