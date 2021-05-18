const prompt = require('prompt-sync')()

// Começo
console.log('Calcular o valor do volume de uma esfera:')
const raio = Number(prompt('O valor do raio da esfera é: '))

// Processamento
volume = 4 * 3.14159 * (raio ** 3)

// Saída
console.log('Escreva seu volume: ', volume, 'metros cúbicos')