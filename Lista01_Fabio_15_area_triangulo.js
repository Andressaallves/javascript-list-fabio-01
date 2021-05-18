const prompt = require('prompt-sync')()

// Entrada
console.log('Receber a altura e base para cálculo de área de um triângulo:')
const altura = Number(prompt('Digite o valor da altura: '))
const base = Number(prompt('Digite o valor da base: '))

// Cálculo
const area = (base * altura) / 2

// Impressão
console.log('O valor da área de um triângulo é: ', area)