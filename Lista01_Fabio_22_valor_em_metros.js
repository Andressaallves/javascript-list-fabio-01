const prompt = require('prompt-sync')()

// Entrada
console.log('Digite um valor de uma questão transformando em metros:')
const km = Number(prompt('O número de quilômetros é: '))

// Conversão de valores
const conversao = km * 1000

// Fim
console.log('O valor convertido em metros será: ', conversao, 'metros')