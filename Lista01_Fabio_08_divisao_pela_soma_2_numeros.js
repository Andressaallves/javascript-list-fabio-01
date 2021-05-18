var prompt = require('prompt-sync')()

// Entrada
console.log('Escreva a divisão pela soma de dois números inteiros: ')
var num_1 = Number(prompt('Digite o primeiro número: '))
var num_2 = Number(prompt('Digite aqui o segundo número: '))

// Meio
soma = num_1 + num_2
diferenca = num_1 - num_2
divisao = soma / diferenca

// Fim
console.log('A correspondência da divisão entre os números dados é: ', divisao)