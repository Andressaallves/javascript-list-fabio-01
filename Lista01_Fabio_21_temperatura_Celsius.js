const prompt = require('prompt-sync')()

// Entrada
console.log('Calcule a conversão de temperatura:')
const temp_F = Number(prompt('O valor em graus Farenheit: '))

// Meio
const temp_C = (5 * temp_F - 160) / 9

// Fim
console.log('O valor convertido de temperatura em graus Celsius será: ', temp_C)