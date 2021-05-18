const prompt = require('prompt-sync')()

// Entrada
console.log('Um programa que receba o Algoritmo da distribuição ótima:')
console.log('Sabendo que no caixa disponibiliza notas de 50, 10, 5 e 1.')
const saque = Number(prompt('Digite aqui o valor em dinheiro: '))

// Processamento
const notas_50 = Number(prompt(saque / 50) * 1)
const resto_1 = Number(prompt(saque % 50))
const notas_10 = Number(prompt(resto_1 / 10) * 3)
const resto_2 = Number(prompt(saque % 10))
const notas_5 = Number(prompt(resto_2 / 5) * 1)
const resto_3 = Number(prompt(resto_2 % 5))
const notas_1 = Number(prompt(resto_3 * 2))

// inal da questão
console.log('A quantia recebida por notas de 50 será: ', notas_50)
console.log('A quantidade de notas de 10 será: ', notas_10)
console.log('A quantidade de notas de 5 será: ', notas_5)
console.log('A quantidade de notas de 1 real será: ', notas_1)