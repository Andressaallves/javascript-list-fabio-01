const prompt = require('prompt-sync')()

// Entrada
console.log('Um programa que receba 3 números e calcule a média aritmética dos mesmos:')
const num_1 = Number(prompt('Digite o primeiro: '))
num_2 = Number(prompt('Digite aqui o segundo: '))
num_3 = Number(prompt('Digite aqui o terceiro: '))

// Meio
const media_simples = Number(prompt(num_1 + num_2 + num_3) / 3)

// Saída
console.log('A média simples é: ', media_simples)