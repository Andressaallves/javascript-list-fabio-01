const prompt = require('prompt-sync')()

// Entrada
console.log('De acordo com o lado, calcular o valor da área de um quadrado:')
const lado = Number(prompt('Digite aqui seu lado: '))

// Processamento
const area = (lado ** 2)

// Saída
console.log('A correspondência da área de um quadrado é: ', area)