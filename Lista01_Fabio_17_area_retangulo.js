const prompt = require('prompt-sync')()

// Entrada
console.log('Receba um valor para a área de um triângulo: ')
const base = Number(prompt('Digite aqui sua base: '))
const altura = Number(prompt('Digite aqui sua altura: '))

// Meio
const area = base * altura

// Fim
console.log('A área de um triângulo é: ', area)