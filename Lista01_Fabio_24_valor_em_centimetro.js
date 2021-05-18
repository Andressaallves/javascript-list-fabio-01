const prompt = require('prompt-sync')()

// Entrada
console.log('Questão de conversão de metros para centímetro:')
const metro = Number(prompt('Digite aqui o valor para metros: '))

// Meio
const cm = metro * 100

// Fim
console.log('O valor em centímetros será: ', cm, 'centímetros')