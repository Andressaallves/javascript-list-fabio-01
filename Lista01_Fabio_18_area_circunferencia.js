const prompt = require('prompt-sync')()

// Entrada
console.log('Receba uma circunferência dados seguintes valores:')
const raio = Number(prompt('Escreva o valor do raio: '))

// Processo
const circunferencia = (3.14159 * 2 * raio)

// Fim
console.log('O valor do comprimento da circunferência será: ', circunferencia)