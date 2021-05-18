const prompt = require('prompt-sync')()

// Entrada
console.log('Questão em que se fala de conversão de quilograma para grama:')
const kg = Number(prompt('Digite o valor de quilogramas: '))

// Valor em gramas
const gramas = kg * 1000

// Final
console.log('O valor convertido de quilogramas para gramas é: ', gramas, 'gramas')