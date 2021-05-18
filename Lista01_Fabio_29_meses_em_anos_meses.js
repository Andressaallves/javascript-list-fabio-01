const prompt = require('prompt-sync')()

// Introdução
console.log('Um programa que receba meses e transforme em anos e meses:')
const meses = Number(prompt('Digite quantos meses: '))

// Metade
const anos = meses / 12
const meses_total = meses % 12

// Final
console.log('A conversão de meses em anos e meses será: ', anos, 'anos e', meses_total, 'meses')