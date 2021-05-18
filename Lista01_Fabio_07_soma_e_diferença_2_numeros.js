const prompt = require('prompt-sync')()

// Introdução
console.log('A soma de dois primeiros números mais a diferença entre os dois últimos é: ')
num_1 = Number(prompt('Escreva o primeiro número: '))
num_2 = Number(prompt('Escreva o segundo número: '))
num_3 = Number(prompt('Escreva o terceiro número: '))

// Meio
soma = num_1 + num_2
diferenca = num_2 - num_3

// Fim
console.log('A soma entre eles será: ', soma)
console.log('A diferença entre eles será: ', diferenca)

