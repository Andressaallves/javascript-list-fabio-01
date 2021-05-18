const prompt = require('prompt-sync')()

// Introdução
console.log('Leia dois números inteiros e mostre sua divisão:')
num_1 = Number(prompt('Digite aqui o primeiro número: '))
num_2 = Number(prompt('Digite aqui o segundo número: '))

// Processamento
quociente = num_1 / num_2
resto_1 = num_1 % num_2

// Saída
console.log('O quociente entre os dois números é: ', quociente)
console.log('O resto da divisão entre os dois números é: ', resto_1)