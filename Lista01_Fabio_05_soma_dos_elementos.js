const prompt = require('prompt-sync')()

// Entrada
console.log('Digite aqui a soma de um número com 3 dígitos: ')
const num_1 = Number(prompt('Digite aqui um número com 3 dígitos: '))

// Meio
const centena = num_1 / 100
const resto_1 = num_1 % 100
const dezena = resto_1 / 10
const unidade = resto_1 % 10
const resto_totais = centena + dezena + unidade

// Saída
console.log('A soma de seus elementos vale: ', resto_totais)