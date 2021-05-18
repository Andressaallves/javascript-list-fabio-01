const prompt = require('prompt-sync')()

// Entrada
console.log('O valor de entrada para uma temperatura em Celsius é: ')
const temp_C = Number(prompt('Digite o valor da temperatura em Celsius: '))

// Meio
const calculo_F = (9 * temp_C + 160) / 5

// Fim
console.log('Digite o valor da temperatura em graus Farenheit: ', calculo_F)